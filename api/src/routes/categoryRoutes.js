import express from "express";
import { getCategories, addCategory, deleteCategory, updateCategory } from "../controllers/catergoryController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getCategories).post(protect, admin, addCategory);
router.route("/:id").delete(protect, admin, deleteCategory).put(protect, admin, updateCategory);

export default router;
