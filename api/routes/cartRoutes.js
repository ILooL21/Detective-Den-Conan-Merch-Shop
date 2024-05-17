import express from "express";
import { getCartById, addProductToCart, decreaseProductInCart, deleteProductInCart } from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getCartById);
router.route("/addproduct").put(protect, addProductToCart);
router.route("/decreaseproduct").put(protect, decreaseProductInCart);
router.route("/deleteproduct").delete(protect, deleteProductInCart);

export default router;
