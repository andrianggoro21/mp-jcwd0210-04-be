import  productQueries = require('../queries/productQuery');

const createProductService =async (productName: string, categoryId: number, price: number, stock: number, description: string, image: string) => {
    try {
        const res = await productQueries.createProductQuery(productName, categoryId, price, stock, description, image)
        return res
    } catch (err) {
        throw err
    }
}

export = {
    createProductService,
}