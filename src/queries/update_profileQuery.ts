// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const createUpdate_profileQuery = async (image: string) => {
//   try {
//     const res = await prisma.update_Profile.create({
//       data: {
//         image: image,
//       },
//     });
//     return res;
//   } catch (err) {
//     throw err;
//   }
// };

// const findUpdate_profileQuery = async (update_Profile: number) => {
//   try {
//     const res = await prisma.update_Profile.findUnique({
//       where: {
//         id: update_Profile,
//       }
//     })
//     return res 
//   } catch (err) {
//     throw err
//   }
// }

// const updateUpdate_profileQuery = async (image: string, userId: number) => {
//   try {
//     const res = await prisma.update_Profile.updateMany({
//       where: {
//         id: userId
//       },
//       data: {
//         image: image
//       },
//     });
//       return res;
//    }  catch (err) {
//       throw err
//    }
// }

// export = {
//   createUpdate_profileQuery,
//   updateUpdate_profileQuery,
//   findUpdate_profileQuery,
// };
