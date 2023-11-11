import express from "express";
const router = express.Router();

import productController from "../controllers/productController";

router.post("/", productController.createProductController)
router.get("/", productController.getProductAllController)

export = router;