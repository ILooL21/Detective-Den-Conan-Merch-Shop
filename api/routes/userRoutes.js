import express from "express";
import { authUser, registerUser, logoutUser, getUserProfile, getAllUsers, updateUserProfile, changeUserRole, refreshToken, addAlamat, deleteAlamat } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.post("/refreshToken", refreshToken);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);
router.route("/allUser").get(protect, getAllUsers);
router.route("/role").put(protect, changeUserRole);
router.route("/alamat").post(protect, addAlamat).delete(protect, deleteAlamat);

export default router;
