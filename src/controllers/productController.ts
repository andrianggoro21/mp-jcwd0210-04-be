import { Request, Response } from 'express';
import productService from "../services/productService";

const createProductController =async (req: Request, res: Response) => {
    try {
        const {productName, categoryId, price, stock, description, image} = req.body
        const result = await productService.createProductService(productName, categoryId, price, stock, description, image)
        return res.status(200).json({
            message: "success",
            data: result
        })
    } catch (err: any) {
        console.error('Error in createProductController:', err);
        return res.status(500).send(`Internal Server Error: ${err.message}`);
        
    }
}

export = {
    createProductController,
}