import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { validationResult } from "express-validator";

const prisma = new PrismaClient();

export async function loginUser(
  username: string,
  email: string,
  password: string
) {
  try {
    const user = await prisma.users.findFirst({
      where: {
        OR: [{ username: username }, { email: email }],
      },
    });

    if (!user) {
      throw new Error("Invalid username or email");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET_KEY || ""
      // {
      //   expiresIn: "1h",
      // }
    );

    return { token, user: user };
  } catch (err) {
    throw new Error("Error during login: " + err);
  }
}
