import express from "express";
import { getArticles, getArticleById, createArticle, updateArticle, deleteArticle } from "../controllers/articleController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getArticles).post(protect, admin, createArticle);
router.route("/:id").get(getArticleById).delete(protect, admin, deleteArticle).put(protect, admin, updateArticle);

export default router;
