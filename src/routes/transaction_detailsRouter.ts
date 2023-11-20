import express  from "express";
const router = express.Router();

import transaction_detailsController = require("../controllers/transaction_detailsController");

router.post("/", transaction_detailsController.createTransaction_DetailsController);
router.get("/", transaction_detailsController.getTransaction_detailsAllController);

export = router;