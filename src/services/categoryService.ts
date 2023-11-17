import categoryQuery from "../queries/categoryQuery";

const createCategoryService = async (categoryName: string, image: string) => {
    try {
        const res = await categoryQuery.createCategoryQuery(categoryName, image)
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

const updateCategoryService =async (categoryId: number, categoryName: string | undefined , image: string, )  => {
    try {
        const existingCategory = await categoryQuery.findCategoryQuery(categoryId)
        if (!existingCategory) throw new Error("data doesnt exist");
        const res = await categoryQuery.updateCategoryQuery(categoryId, categoryName, image)
        return res
    } catch (err) {
        throw err
    }
}

export = {
    createCategoryService,
    getCategoryAllService,
    updateCategoryService
}