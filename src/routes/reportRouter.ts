import express from "express";
import reportController from "../controllers/reportController";
const router = express.Router();

router.get("/", reportController.getTransactionGraphController)
router.get("/all", reportController.getTransactionAllController)

export = router;