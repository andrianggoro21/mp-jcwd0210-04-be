// controllers/AuthController.ts
import { Request, Response } from "express";
import { loginUser } from "../services/loginService";
import { validationResult } from "express-validator";

const login = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const result = await loginUser(username, email, password);
    res.json(result);
  } catch (error: any) {
    console.error("Error during login:", error.message);
    res.status(401).json({ error: error.message });
  }
};

export = {
  login,
};
