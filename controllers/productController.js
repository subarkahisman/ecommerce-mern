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
  const queryObj = { ...req.query };

  const excludeField = ["page", "limit", "name"];
  excludeField.forEach((element) => delete queryObj[element]);

  let query;

  if (req.query.name) {
    query = Product.find({
      name: { $regex: req.query.name, $option: "i" },
    });
  } else {
    query = Product.find(queryObj);
  }

  const page = req.query.page * 1 || 1;
  const limitData = req.query.limit * 1 || 30;
  const skipData = (page - 1) * limitData;

  query = query.skip(skipData).limit(limitData);

  if (req.query.page) {
    const numProduct = await Product.countDocuments();
    if (skipData >= numProduct) {
      res.status(404);
      throw new Error("Halaman ini tidak ada !.");
    }
  }

  const data = await query;

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
  const file = req.file;
  if (!file) {
    res.status(400);
    throw new Error("Tidak Ada File Gambar yang Diinput");
  }

  const imageFIleName = file.filename;
  const pathImageFIle = `/uploads/${imageFIleName}`;

  res.status(200).json({
    message: "File Gambr Berhasil Di-upload",
    image: pathImageFIle,
  });
});
