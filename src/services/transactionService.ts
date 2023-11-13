import transactionQuery = require("../queries/transactionQuery");

const createTransactionService = async (
  date: Date,
  totalQuantity: number,
  totalPrice: number,
  payment_methodId: number,
  paymentAmount: number,
  paymentChange: number
) => {
  try {
    const res = await transactionQuery.createTransactionQuery(
      date,
      totalQuantity,
      totalPrice,
      payment_methodId,
      paymentAmount,
      paymentChange
    );
    return res;
  } catch (err) {
    throw err;
  }
};

const getTransactionByIdService = async (transactionId: number) => {
  try {
    const res = await transactionQuery.getTransactionByIdQuery(transactionId);
    return res;
  } catch (err) {
    throw err;
  }
};

const getTransactionAllService = async () => {
  try {
    const res = await transactionQuery.getTransactionAllQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

// const updateTransactionService = async (
//   productName: string,
//   categoryId: number,
//   price: number,
//   stock: number,
//   description: string,
//   statusId: number,
//   image: string,
//   productId: number
// ) => {
//   try {
//     const existingProduct = await transactionQuery.findProductQuery(productId);
//     if (!existingProduct) throw new Error("data doesnt exist");
//     const res = await productQueries.updateProductQuery(
//       productName,
//       categoryId,
//       price,
//       stock,
//       description,
//       statusId,
//       image,
//       productId
//     );
//     return res;
//   } catch (err) {
//     throw err;
//   }
// };

export = {
  createTransactionService,
  getTransactionByIdService,
  getTransactionAllService,
  //   updateProductService,
};
