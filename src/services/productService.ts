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
<<<<<<< Updated upstream
        return res;
=======
        return res
    } catch (err) {
        throw err
    }
}

const getProductIdService =async (productId: number) => {
    try {
        const res = await productQueries.getProductIdQuery(productId)
        return res
    } catch (err) {
        throw err
    }
}

const getProductPaginationService =async (page: number, pageSize: number, productName: string, categoryId: number, alphaId: number, priceId: number) => {
    try {
        const res = await productQueries.getProductPaginationQuery(page, pageSize, productName, categoryId, alphaId, priceId)

        interface Product {
            productName: string;
            price: Decimal;
        }
        let sortedRes: Product[] = [...res];
        if (alphaId === 0) {
            sortedRes.sort((a, b) => a.productName.localeCompare(b.productName));
        } else if ( alphaId === 1) {
            sortedRes.sort((a, b) => b.productName.localeCompare(a.productName));
        } else  if (priceId === 0) {
            sortedRes.sort((a, b) => a.price.toNumber() - b.price.toNumber());
        } else if (priceId === 1) {
            sortedRes.sort((a, b) => b.price.toNumber() - a.price.toNumber());
        }
        return sortedRes;
>>>>>>> Stashed changes
    } catch (err) {
        throw err;
    }
}

const updateProductService =async (productId: number, productName: string  | undefined, categoryId: number | undefined, price: number | undefined, stock: number | undefined, description: string | undefined, statusId: number | undefined, image: string )  => {
    try {
        const existingProduct  = await productQueries.findProductQuery(productId)
        if (!existingProduct) throw new Error("data doesnt exist");
        const res = await productQueries.updateProductQuery(productId, productName, categoryId, price, stock, description, statusId, image)
        return res
    } catch (err) {
        throw err
    }
}

export = {
    createProductService,
    getProductAllService,
<<<<<<< Updated upstream
    updateProductService
=======
    getProductIdService,
    getProductPaginationService,
    updateProductService,
    searchProductService,
    filterProductAlphabetService,
    filterProductPriceService
>>>>>>> Stashed changes
}