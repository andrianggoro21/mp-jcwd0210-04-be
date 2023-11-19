import { Request, Response } from "express";
import transactionService from "../services/transactionService";

const createTransactionController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const {
      userId,
      date,
      totalQuantity,
      totalPrice,
      payment_methodId,
      paymentAmount,
      paymentChange,
    } = req.body;
    const numUserId = Number(userId);
    const numTotalQuantity = Number(totalQuantity);
    const numTotalPrice = Number(totalPrice);
    const numPayment_methodId = Number(payment_methodId);
    const numPaymentAmount = Number(paymentAmount);
    const numPaymentChange = Number(paymentChange);
    const result = await transactionService.createTransactionService(
      userId,
      date,
      numTotalQuantity,
      numTotalPrice,
      numPayment_methodId,
      numPaymentAmount,
      numPaymentChange
      // req.file?.filename || ""
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err: any) {
    console.error("Error in createTransactionController:", err);
    return res.status(500).send(`Internal Server Error: ${err.message}`);
  }
};

const getTransactionByIdController = async (req: Request, res: Response) => {
  try {
    const { transactionId } = req.query;
    const parsedTransactionId = parseInt(transactionId as string, 10);
    const result = await transactionService.getTransactionByIdService(
      parsedTransactionId
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err: any) {
    console.error("Error in getProductAllController:", err);
    return res.status(500).send(`Internal Server Error: ${err.message}`);
  }
};

const getTransactionAllController = async (req: Request, res: Response) => {
  try {
    const result = await transactionService.getTransactionAllService();
    return res.status(200).json({
      message: "success", 
      data: result,
    });
    console.log("result", res);
  } catch (err: any) {
    console.error("error in getTransactionAllController", err);
    return res.status(500).send(`Internal Server Error: ${err.message}`);
  }
};

// const updateProductController = async (req: Request, res: Response) => {
//   try {
//     const { productId } = req.params;
//     const parsedProductId = parseInt(productId, 10);
//     const {
//       productName,
//       categoryId,
//       price,
//       stock,
//       description,
//       statusId,
//       image,
//     } = req.body;
//     const result = await productService.updateProductService(
//       productName,
//       categoryId,
//       price,
//       stock,
//       description,
//       statusId,
//       image,
//       parsedProductId
//     );
//     return res.status(200).json({
//       message: "success",
//       data: result,
//     });
//   } catch (err: any) {
//     console.error("Error in createProductController:", err);
//     return res.status(500).send(`Internal Server Error: ${err.message}`);
//   }
// };

export = {
  createTransactionController,
  getTransactionByIdController,
  getTransactionAllController,
};
