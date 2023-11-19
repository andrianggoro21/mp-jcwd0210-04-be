import express from "express";
const router = express.Router();

import loginController from "../controllers/loginController";

const { runValidator, loginValidator } = require("../middleware/validator");

router.post("/login", loginValidator, runValidator, loginController.login);

export = router;
