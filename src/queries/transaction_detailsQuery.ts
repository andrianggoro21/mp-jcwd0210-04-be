import { PrismaClient } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

const createTransaction_detailsQuery = async (
  productId: number,
  transactionId: number,
  quantity: number,
  price: Decimal,
 
) => {
  try {
    const res = await prisma.transaction_Details.create({
      data: {
        productId: productId,
        transactionId: transactionId,
        quantity: quantity,
        price: price,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const getTransaction_detailsAllQuery = async () => {
  try {
    const res = await prisma.transaction_Details.findMany();
    return res;
  } catch (err) {
    throw err;
  }
};

const findTransaction_detailsQuery = async (productId: number) => {
  try {
    const res = await prisma.products.findUnique({
      where: {
        id: productId,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

// const updateProductQuery = async (
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
//     const res = await prisma.products.updateMany({
//       where: {
//         id: productId,
//       },
//       data: {
//         productName: productName,
//         categoryId: categoryId,
//         price: price,
//         stock: stock,
//         description: description,
//         statusId: statusId,
//         image: image,
//       },
//     });
//     return res;
//   } catch (err) {
//     throw err;
//   }
// };

export = {
  createTransaction_detailsQuery,
  getTransaction_detailsAllQuery,
  findTransaction_detailsQuery,
  //   updateProductQuery,
};
