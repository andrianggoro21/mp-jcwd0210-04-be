import categoryQuery from "../queries/categoryQuery";

const createCategoryService = async (categoryName: string) => {
    try {
        const res = await categoryQuery.createCategoryQuery(categoryName)
        return res;
    } catch (err) {
        throw err;
    }
}

const getCategoryAllService = async () => {
    try {
        const res = await categoryQuery.getCategoryAllQuery()
        return res;
    } catch (err) {
        throw err;
    }
}

export = {
    createCategoryService,
    getCategoryAllService
}