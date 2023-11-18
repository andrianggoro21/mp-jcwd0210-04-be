import express from "express";
const router = express.Router();

import productController from "../controllers/productController";
import multer = require("../middleware/multer");

router.post("/", multer.uploadProductFile, productController.createProductController)
router.get("/", productController.getProductAllController)
router.get("/subproduct/:productId", productController.getProductIdController)
router.get("/pagination", productController.getProductPaginationController)
router.patch("/update/:productId", multer.uploadProductFile, productController.updateProductController)
router.patch("/status/update/:productId", productController.updateProductStatusController)
// router.get("/search/", productController.searchProductController)
// router.get("/filter/", productController.filterProductAlphabetController)
// router.get("/filter/price", productController.filterProductPriceController)

export = router;