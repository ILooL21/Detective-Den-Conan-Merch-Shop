import express from "express";
import { getSupports, deleteSupport, addSupport } from "../controllers/supportController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, admin, getSupports).post(addSupport);
router.delete("/:id", protect, admin, deleteSupport);

export default router;
