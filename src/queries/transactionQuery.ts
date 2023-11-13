import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createTransactionQuery = async (
  date: Date,
  totalQuantity: number,
  totalPrice: number,
  payment_methodId: number,
  paymentAmount: number,
  paymentChange: number
) => {
  try {
    const res = await prisma.transactions.create({
      data: {
        date: date,
        totalQuantity: totalQuantity,
        totalPrice: totalPrice,
        payment_methodId: payment_methodId,
        paymentAmount: paymentAmount,
        paymentChange: paymentChange,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const getTransactionByIdQuery = async (transactionId: number) => {
  try {
    const res = await prisma.transactions.findUnique({
      where: {
        id: transactionId,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const getTransactionAllQuery = async () => {
  try {
    const res = await prisma.transactions.findMany({include: {transaction_details: true}});
    return res;
  } catch (err) {
    throw err;
  }
};

// const updateTransactionQuery = async (
//   date: Date,
//   totalQuantity: number,
//   totalPrice: number,
//   payment_methodId: number,
//   paymentAmount: number,
//   paymentChange: number
// ) => {
//   try {
//     const res = await prisma.transactions.updateMany({
//       where: {
//         Id: transactionId,
//       },
//       data: {
//         date: date,
//         totalQuantity: totalQuantity,
//         totalPrice: totalPrice,
//         payment_methodId: payment_methodId,
//         paymentAmount: paymentAmount,
//         paymentChange: paymentChange,
//       },
//     });
//     return res;
//   } catch (err) {
//     throw err;
//   }
// };

export = {
  createTransactionQuery,
  getTransactionAllQuery,
  getTransactionByIdQuery,
  // updateTransactionQuery,
};
