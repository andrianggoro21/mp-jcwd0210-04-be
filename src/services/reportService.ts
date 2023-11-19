import reportQuery from "../queries/reportQuery";

const getTransactionGraphService = async () => {
    try {
        const res = await reportQuery.getTransactionGraphQuery();
        return res;
    } catch (err) {
        throw err
    }
}

const getTransactionAllService =async (startDate: string, endDate: string) => {
    try {
        const res = await reportQuery.getTransactionAllQuery(startDate, endDate)
        return res
    } catch (err) {
       throw err 
    }
}

export = {
    getTransactionGraphService,
    getTransactionAllService
}