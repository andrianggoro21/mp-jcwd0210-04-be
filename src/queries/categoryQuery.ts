import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createCategoryQuery = async (categoryName: string) => {
    try {
        const res = await prisma.categories.create({
            data: {
                categoryName: categoryName
            }
        })
        return res;
    } catch (err) {
        throw err
    }
}

const getCategoryAllQuery = async () => {
    try {
        const res = await prisma.categories.findMany()
        return res;
    } catch (err) {
        throw err;
    }
}

export = {
    createCategoryQuery,
    getCategoryAllQuery,
}