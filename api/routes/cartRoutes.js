import express from "express";
import { getCartById, addProductToCart, decreaseProductInCart, deleteProductInCart } from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/:id").get(protect, getCartById).put(protect, addProductToCart).delete(protect, deleteProductInCart).put(protect, decreaseProductInCart);

export default router;
