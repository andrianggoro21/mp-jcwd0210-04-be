import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config({
    path: path.resolve(__dirname, "../.env")
});

const port: number = Number(process.env.PORT) || 8000; 
const app = express();

app.use(express.json());

import routerProduct = require("./routes/productRouter");
app.use("/product", routerProduct)

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})

