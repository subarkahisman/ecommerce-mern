import asyncHandler from "../middleware/asyncHandler.js";

export const createOrder = asyncHandler(async (req, res) => {
  return res.status(201).json({
    message: "Data Order Produk Berhasil Ditambahkan",
  });
});

export const allOrder = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "Semua Data Order Produk Berhasil Ditampilkan",
  });
});

export const detailOrder = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "Detail Data Order Produk Berhasil Diambil",
  });
});

export const currentUserOrder = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "Data Current User Order Produk Berhasil Diambil",
  });
});
