import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createProductQuery = async (productName: string, categoryId: number, price: number, stock: number, description: string, image: string) => {
    try {
        const res = await prisma.products.create({
            data: {
                productName: productName,
                categoryId: categoryId,
                price:  price,
                stock:  stock,
                description: description,
                image:  image,
            },
        });
        return res;
    } catch (err) {
        throw err;
    } 
};

export = {
    createProductQuery
}