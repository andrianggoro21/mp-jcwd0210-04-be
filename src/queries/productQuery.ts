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

const getProductAllQuery = async (page: number, pageSize: number) => {
    try {
        const skip = (page - 1) * pageSize;
        const take = pageSize
        const res = await prisma.products.findMany({
            skip,
            take,
        })
        return res
    } catch (err) {
        throw err
    }
}

const findProductQuery = async (productId:number)  => {
    try {
        const res = await prisma.products.findUnique({
            where: {
                id: productId,
              },
        })
        return res
    } catch (err) {
        throw err
    }
}

const updateProductQuery =async (productName: string, categoryId: number, price: number, stock: number, description: string, statusId: number, image: string, productId: number) => {
    try {
        const res = await prisma.products.updateMany({
            where: {
                id: productId
            },
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
        throw err
    }
}


const findProductQueryNameCategory = async (productName: string, categoryId:number)  => {
    try {
        interface ProductFilter {
            productName?: { contains: string };
            categoryId?: number;
        }
        const filter : ProductFilter = {};
        if (productName) {
            filter.productName = {contains: productName}
        }
        if (categoryId) {
            filter.categoryId = categoryId
        }
        const res = await prisma.products.findFirst({
            where: filter
        })
        return res
    } catch (err) {
        throw err
    }
}

const searchProductQuery = async (productName: string, categoryId: number) => {
    try {
        interface ProductFilter {
            productName?: { contains: string };
            categoryId?: number;
        }
        const filter : ProductFilter = {};
        if (productName) {
            filter.productName = {contains: productName}
        }
        if (categoryId) {
            filter.categoryId = categoryId
        }
      
        const res = await prisma.products.findMany({
            where: filter
        })
        return res
    } catch (err) {
        throw err
    }
}

const filterProductQuery = async () => {
    try {
        const res = await prisma.products.findMany()
        return res
    } catch (err) {
        throw err
    }
}

export = {
    createProductQuery,
    getProductAllQuery,
    findProductQuery,
    updateProductQuery,
    findProductQueryNameCategory,
    searchProductQuery,
    filterProductQuery,
}