import express from "express";
const router = express.Router();

import categoryController from "../controllers/categoryController";

router.post("/", categoryController.createCategoryController)
router.get("/", categoryController.getCategoryAllController)

export = router;