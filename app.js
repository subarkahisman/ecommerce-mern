import express from "express";
import mongoose from "mongoose";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// IMPORT ROUTER
import authRouter from "./routes/authRouter.js";
import productRouter from "./routes/productRouter.js";

dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/product", productRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Aplikasi berjalan di port ${port}`);
});

mongoose
  .connect(process.env.DATABASE, {})
  .then(() => {
    console.log("Koneksi database berhasil");
  })
  .catch((err) => {
    console.log(err);
  });
