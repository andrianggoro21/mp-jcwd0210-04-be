import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({
    path: path.resolve(__dirname, "../.env")
});

const port: number = Number(process.env.PORT) || 8000; 
const app = express();

app.use(express.json());
app.use(
    cors({
      origin: process.env.WHITELISTED_DOMAIN
        ? process.env.WHITELISTED_DOMAIN.split(" ")
        : undefined,
    })
  );


import routerProduct = require("./routes/productRouter");
app.use("/product", routerProduct);
import routerCategory = require("./routes/categoryRouter");
app.use("/category", routerCategory)
import routerReport = require("./routes/reportRouter");
app.use("/report", routerReport)

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})

