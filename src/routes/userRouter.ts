import express from "express";
const router = express.Router();

import userControllers from "../controllers/userControllers";
import multer = require("../middleware/multer");

router.post("/register", userControllers.createUserController);
router.get("/", userControllers.getUserAllController);
router.patch("/update/:userId", userControllers.updateUserController);

export = router;
