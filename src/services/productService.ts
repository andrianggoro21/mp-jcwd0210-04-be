import  productQueries = require('../queries/productQuery');

const createProductService =async (productName: string, categoryId: number, price: number, stock: number, description: string, statusId: number, image: string) => {
    try {
        const res = await productQueries.createProductQuery(productName, categoryId, price, stock, description, statusId, image)
        return res
    } catch (err) {
        throw err
    }
}

const getProductAllService =async () => {
    try {
        const res = await productQueries.getProductAllQuery()
        return res;
    } catch (err) {
        throw err;
    }
}

export = {
    createProductService,
    getProductAllService
}