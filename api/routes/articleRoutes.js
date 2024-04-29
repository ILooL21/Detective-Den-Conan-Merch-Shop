import express from "express";
import { getArticles, getArticleById, createArticle, updateArticle, deleteArticle } from "../controllers/articleController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/:id").get(getArticleById);
router.route("/").get(getArticles).post(protect, admin, createArticle).delete(protect, admin, deleteArticle).put(protect, admin, updateArticle);

export default router;
