import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Article from "../models/articleModel.js";
import generateToken from "../utils/generateToken.js";

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const token = req.cookies.jwt;
  if (token) {
    res.status(200).json({ message: "Already logged in" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      listalamat: user.listalamat,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  const firstUser = await User.findOne();

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    role: firstUser ? "user" : "superadmin",
    listalamat: [],
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      listalamat: user.listalamat,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    res.status(400);
    throw new Error("You are not logged in");
  }

  res.clearCookie("jwt");
  res.status(200).json({ message: "Logged out successfully" });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      listalamat: user.listalamat,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Get all users
// @route   GET /api/users/allUser
// @access  Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({ $or: [{ role: "user" }, { role: "admin" }] }).sort({ role: 1 });

  if (users) {
    res.json(
      users.map((user) => ({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      }))
    );
  } else {
    res.status(404);
    throw new Error("No users found");
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const { name, email, password } = req.body;

  //cari artikel yang penulisnya atau editor nya adalah user yang sedang diupdate
  const articles = await Article.find({ $or: [{ penulis: user.name }, { editor: user.name }] });

  if (user) {
    if (articles) {
      articles.map(async (article) => {
        if (article.penulis === user.name) {
          article.penulis = name;
        }
        if (article.editor === user.name) {
          article.editor = name;
        }
        await article.save();
      });
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;

    const updatedUser = await user.save();

    res.json(updatedUser);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Change user role
// @route   Put /api/users/changeRole
// @access  Private
const changeUserRole = asyncHandler(async (req, res) => {
  const user = await User.findById(req.body.id);
  const userlogin = await User.findById(req.body.userId);

  if (user) {
    if (user.role === "user") {
      await User.findByIdAndUpdate(req.body.id, { role: "admin" });
      res.json({
        _id: userlogin._id,
        name: userlogin.name,
        email: userlogin.email,
        role: userlogin.role,
        listalamat: userlogin.listalamat,
      });
    } else if (user.role === "admin") {
      await User.findByIdAndUpdate(req.body.id, { role: "user" });
      res.json({
        _id: userlogin._id,
        name: userlogin.name,
        email: userlogin.email,
        role: userlogin.role,
        listalamat: userlogin.listalamat,
      });
    }
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    refresh token
// @route   POST /api/users/refreshToken
// @access  Public
const refreshToken = asyncHandler(async (req, res) => {
  const user = await User.findById(req.body.id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      listalamat: user.listalamat,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    add alamat
// @route   POST /api/users/alamat
// @access  Private

const addAlamat = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    if (!req.body.alamat) {
      res.status(400);
      throw new Error("Alamat is required");
    }
    user.listalamat.push(req.body.alamat);

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      listalamat: updatedUser.listalamat,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    delete alamat
// @route   DELETE /api/users/alamat
// @access  Private

const deleteAlamat = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.listalamat = user.listalamat.filter((listalamat) => listalamat !== req.body.alamat);

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      listalamat: updatedUser.listalamat,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { authUser, registerUser, logoutUser, getUserProfile, getAllUsers, updateUserProfile, changeUserRole, refreshToken, addAlamat, deleteAlamat };
