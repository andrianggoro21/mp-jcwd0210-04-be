import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
interface TransactionGroupByResult {
    date: string;
    _avg_totalPrice: number; 
}

const getTransactionGraphQuery = async () : Promise<TransactionGroupByResult[]> => {
    try {
        const res = await prisma.$queryRaw<TransactionGroupByResult[]>`
            SELECT DATE_FORMAT(date, '%Y-%m-%d') AS date, AVG(totalPrice) AS _avg_totalPrice
            FROM transactions
            GROUP BY DATE_FORMAT(date, '%Y-%m-%d')
        `;
        return res;
    } catch (err) {
        throw err;
    }
}

const getTransactionAllQuery =async (startDate?: string, endDate?: string) => {
    try {

        const whereClause: {
            date?: {
                gte?: Date;
                lte?: Date;
            };
        } = {};
        
        if (startDate && endDate) {
            whereClause.date = {
                gte: new Date(startDate),
                lte: new Date(endDate),
            };
        }

        const res = await prisma.transactions.findMany({
            where: whereClause,
            include: {
                user: true,
                transaction_details: {
                    include: {
                        product: true
                    }
                },
            }
        })
        return res
    } catch (err) {
        throw err
    }
}

export = { 
    getTransactionGraphQuery,
    getTransactionAllQuery
}