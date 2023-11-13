import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUpdate_profileQuery = async (image: string) => {
  try {
    const res = await prisma.update_profiles.create({
      data: {
        image: image,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export = {
  createUpdate_profileQuery,
};
