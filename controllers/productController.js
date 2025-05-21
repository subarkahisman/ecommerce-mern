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
  const data = await Product.find();

  return res.status(200).json({
    message: "Semua Produk Berhasil Ditampilkan",
    data,
  });
});

export const detailProduct = asyncHandler(async (req, res) => {
  const productData = await Product.findById(req.params.id);

  if (!productData) {
    res.status(404);
    throw new Error(
      `Detail Data Product dengan Id : ${req.params.id} Tidak Ditemukan !`
    );
  }
  return res.status(200).json({
    message: "Detail Data Produk Berhasil Diambil",
    data: productData,
  });
});

export const updateProduct = asyncHandler(async (req, res) => {
  const paramId = req.params.id;
  const updateProduct = await Product.findByIdAndUpdate(paramId, req.body, {
    runValidators: false,
    new: true,
  });

  return res.status(201).json({
    message: "Data Produk Berhasil Diperbarui",
    data: updateProduct,
  });
});

export const deleteProduct = asyncHandler(async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    message: "Data Produk Berhasil Dihapus",
  });
});

export const fileUpload = asyncHandler(async (req, res) => {
  res.send("File Upload Image Product");
});
