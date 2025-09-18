const Product = require("../models/Product");
const Supplier = require("../models/Supplier");

// Hiển thị danh sách
exports.index = async (req, res) => {
  const products = await Product.find().populate("supplierId");
  res.render("products/index", { products });
};

// Form thêm mới
exports.new = async (req, res) => {
  const suppliers = await Supplier.find();
  res.render("products/new", { suppliers });
};

// Thêm mới
exports.create = async (req, res) => {
  await Product.create(req.body);
  res.redirect("/products");
};

// Form edit
exports.edit = async (req, res) => {
  const product = await Product.findById(req.params.id);
  const suppliers = await Supplier.find();
  res.render("products/edit", { product, suppliers });
};

// Cập nhật
exports.update = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/products");
};

// Xóa
exports.delete = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
};
