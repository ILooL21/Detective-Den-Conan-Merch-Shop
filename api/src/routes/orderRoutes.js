import express from "express";
import { getOrders, addOrderItems, getMyOrders, updateOrder, paidOrder, cancelOrder, selesaiOrder } from "../controllers/orderController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, admin, getOrders).post(protect, addOrderItems);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").put(protect, admin, updateOrder);
router.route("/:id/paid").put(protect, admin, paidOrder);
router.route("/:id/selesai").put(protect, selesaiOrder);
router.route("/:id/cancel").put(protect, cancelOrder);

export default router;
