import { Request, Response } from "express";
import transaction_detailsService from "../services/transaction_detailsService";

const createTransaction_DetailsController = async (
  req: Request,
  res: Response
) => {
  try {
    const { productId, transactionId, quantity, price} =
      req.body;
    const numProductId = Number(productId);
    const numTransactionId = Number(transactionId)
    const numQuantity = Number(quantity);
    const numPrice = Number(price);
    const result = await transaction_detailsService.createTransaction_detailsService(
     numProductId, 
     numTransactionId,
     numQuantity, 
     numPrice
    //   req.file?.filename || ""
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err: any) {
    console.error("Error in createProductController:", err);
    return res.status(500).send(`Internal Server Error: ${err.message}`);
  }
};

const getTransaction_detailsAllController = async (req: Request, res: Response) => {
  try {
    const result = await transaction_detailsService.getTransaction_detailsAllService();
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err: any) {
    console.error("Error in getProductAllController:", err);
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
  createTransaction_DetailsController,
  getTransaction_detailsAllController,
  //   updateProductController,
};
