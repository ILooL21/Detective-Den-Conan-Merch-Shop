import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";

// @desc    Fetch all categories
// @route   GET /api/categories
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({});

  res.json(categories);
});

// @desc    add category
// @route   POST /api/categories
// @access  Private/Admin
const addCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const category = new Category({
    name,
  });

  const createdCategory = await category.save();
  res.status(201).json(createdCategory);
});

export { getCategories, addCategory };
