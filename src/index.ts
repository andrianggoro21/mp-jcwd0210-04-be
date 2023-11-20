const bodyParser = require("body-parser");
import express from "express";
const cors = require("cors");
const path = require("path");
// const { routes } = require("./routes");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const port: number = Number(process.env.PORT) || 8000;
const app = express();
app.use(bodyParser.json());
// app.use(
//   cors({
//     origin: process.env.WHITELISTED_DOMAIN
//       ? process.env.WHITELISTED_DOMAIN.split(" ")
//       : undefined,
//   })
// );

const corsOptions = {
  origin: "http://localhost:5173", // Sesuaikan port jika front-end Anda berjalan di port yang berbeda
  optionsSuccessStatus: 200, // beberapa browser legacy tidak mendukung 204
};

// Gunakan CORS dengan opsi tersebut
app.use(cors(corsOptions));

// app.use("/", routes);
import routerUser = require("./routes/userRouter");
app.use("/auth", routerUser);
import login from "./routes/loginRouter";
app.use("/auth", login);
import routerProduct = require("./routes/productRouter");
app.use("/product", routerProduct);
import routerCategory = require("./routes/categoryRouter");
app.use("/category", routerCategory);
import routerReport = require("./routes/reportRouter");
app.use("/report", routerReport);
// import routerReport = require("./routes/reportRouter");
// app.use("/report", routerReport)
import routerStatus = require("./routes/statusRouter");
app.use("/status", routerStatus);

app.use("/uploads", express.static(path.join(__dirname, "./public/images")));

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
