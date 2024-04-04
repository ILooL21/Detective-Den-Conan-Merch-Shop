import express from "express";
import { getCategories, addCategory } from "../controllers/catergoryController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getCategories).post(protect, admin, addCategory);

export default router;
