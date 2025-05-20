import express from "express";
import {
  createProduct,
  allProduct,
  detailProduct,
  updateProduct,
  deleteProduct,
  fileUpload,
} from "../controllers/productController.js";
import { protectedMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createProduct);

router.get("/", allProduct);

router.get("/:id", detailProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

router.post("/file-upload", fileUpload);

export default router;
