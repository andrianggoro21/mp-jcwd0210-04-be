import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createProductQuery = async (productName: string, categoryId: number, price: number, stock: number, description: string, statusId: number, image: string) => {
    try {
        const res = await prisma.products.create({
            data: {
                productName: productName,
                categoryId: categoryId,
                price:  price,
                stock:  stock,
                description: description,
                statusId: statusId,
                image:  image,
                
            },
        });
        return res;
    } catch (err) {
        throw err;
    } 
};

const getProductAllQuery =async () => {
    try {
        const res = await prisma.products.findMany()
        return res
    } catch (err) {
        throw err
    }
}

export = {
    createProductQuery,
    getProductAllQuery
}