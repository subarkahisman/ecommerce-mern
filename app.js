import express from "express";
import authRouter from "./routes/authRouter.js";

const app = express();
const port = 3000;

app.use("/api/v1/auth", authRouter);

app.listen(port, () => {
  console.log(`Aplikasi berjalan di port ${port}`);
});
