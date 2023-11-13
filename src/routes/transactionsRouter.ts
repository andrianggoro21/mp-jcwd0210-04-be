import express from "express";
const router = express.Router();

import transactionController = require("../controllers/transactionController");

router.post("/", transactionController.createTransactionController);
router.get("/id", transactionController.getTransactionByIdController);
router.get("/", transactionController.getTransactionAllController);
export = router;
