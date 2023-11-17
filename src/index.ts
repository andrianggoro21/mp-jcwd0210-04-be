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
app.use("/product", routerProduct);
import routerCategory = require("./routes/categoryRouter");
app.use("/category", routerCategory)
<<<<<<< Updated upstream
=======
import routerReport = require("./routes/reportRouter");
app.use("/report", routerReport)
import routerStatus = require("./routes/statusRouter");
app.use("/status", routerStatus)

app.use("/uploads", express.static(path.join(__dirname, "./public/images")));
>>>>>>> Stashed changes

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})

