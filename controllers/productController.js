import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

export const createProduct = asyncHandler(async (req, res) => {
  const newProduct = await Product.create(req.body);

  return res.status(201).json({
    message: "Data Produk Berhasil Ditambahkan",
    data: newProduct,
  });
});

export const allProduct = asyncHandler(async (req, res) => {
  res.send("All Product");
});

export const detailProduct = asyncHandler(async (req, res) => {
  res.send("Detail Product");
});

export const updateProduct = asyncHandler(async (req, res) => {
  res.send("Update Product");
});

export const deleteProduct = asyncHandler(async (req, res) => {
  res.send("Delete Product");
});

export const fileUpload = asyncHandler(async (req, res) => {
  res.send("File Upload Image Product");
});
