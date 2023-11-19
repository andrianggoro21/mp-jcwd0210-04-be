import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

exports.runValidator = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()[0].msg,
    });
  }
  next();
};

exports.loginValidator = [
  // check("username" || "email")
  check("email").notEmpty().withMessage("username/email name required"),
  check("password").notEmpty().withMessage("password name required"),
];

// exports.registrationValidator = [
//   check("username").notEmpty().withMessage("username name required"),
//   check("email").notEmpty().withMessage("email name required"),
//   check("password")
//     .notEmpty()
//     .withMessage("password name required")
//     .isLength({
//       min: 10,
//       max: 15,
//     })
//     .withMessage("username must between 6 to 15 charackter"),
// ];
