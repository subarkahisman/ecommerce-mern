import express from "express";
import {
  createProduct,
  allProduct,
  detailProduct,
  updateProduct,
  deleteProduct,
  fileUpload,
} from "../controllers/productController.js";
import {
  protectedMiddleware,
  adminMiddleware,
} from "../middleware/authMiddleware.js";

import { upload } from "../utils/uploadFileHandler.js";

const router = express.Router();

router.post("/", protectedMiddleware, adminMiddleware, createProduct);

router.get("/", allProduct);

router.get("/:id", detailProduct);

router.put("/:id", protectedMiddleware, adminMiddleware, updateProduct);

router.delete("/:id", protectedMiddleware, adminMiddleware, deleteProduct);

router.post("/file-upload", protectedMiddleware, adminMiddleware, fileUpload);

export default router;
