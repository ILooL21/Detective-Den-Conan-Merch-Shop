import express from "express";
import { getRiddles, getRiddleById, addRiddle, updateRiddle, deleteRiddle, addTersangka, deleteTersangka, answerRiddle } from "../controllers/riddleController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getRiddles).post(protect, admin, addRiddle);
router.route("/:id").get(getRiddleById).put(protect, admin, updateRiddle).delete(protect, admin, deleteRiddle);
router.route("/tersangka/:id").put(protect, admin, addTersangka).delete(protect, admin, deleteTersangka);
router.route("/:id/answer").post(answerRiddle);

export default router;
