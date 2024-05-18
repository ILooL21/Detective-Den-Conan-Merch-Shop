import express from "express";
import { getOrders, addOrderItems, getMyOrders, updateOrder } from "../controllers/orderController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, admin, getOrders).post(protect, addOrderItems);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").put(protect, admin, updateOrder);

export default router;
