import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const port: number = Number(process.env.PORT) || 8000;
const app = express();

app.use(express.json());

import routerProduct = require("./routes/productRouter");
app.use("/product", routerProduct);

import routerTransactions = require("./routes/transactionsRouter");
app.use("/transactions", routerTransactions);

import routerTransaction_details = require("./routes/transaction_detailsRouter");
app.use("/transaction_details", routerTransaction_details);

import routerUpdate_Profile = require("./routes/update_profileRouter");
app.use("/update_profile", routerUpdate_Profile);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
