import transaction_detailsQuery = require("../queries/transaction_detailsQuery");

const createTransaction_detailsService = async (
  productId: number,
  transactionId: number,
  quantity: number,
  price: number | null | any
) => {
  try {
    const res = await transaction_detailsQuery.createTransaction_detailsQuery(
      productId,
      transactionId,
      quantity,
      price
    );
    return res;
  } catch (err) {
    throw err;
  }
};

const getTransaction_detailsAllService = async () => {
  try {
    const res = await transaction_detailsQuery.getTransaction_detailsAllQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

// const updateProductService = async (
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
//     const existingProduct = await productQueries.findProductQuery(productId);
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
  createTransaction_detailsService,
  getTransaction_detailsAllService,
  //   updateProductService,
};
