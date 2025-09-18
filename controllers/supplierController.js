const Supplier = require("../models/Supplier");

// Hiển thị danh sách
exports.index = async (req, res) => {
  const suppliers = await Supplier.find();
  res.render("suppliers/index", { suppliers });
};

// Form thêm mới
exports.new = (req, res) => {
  res.render("suppliers/new");
};

// Thêm mới
exports.create = async (req, res) => {
  await Supplier.create(req.body);
  res.redirect("/suppliers");
};

// Form edit
exports.edit = async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);
  res.render("suppliers/edit", { supplier });
};

// Cập nhật
exports.update = async (req, res) => {
  await Supplier.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/suppliers");
};

// Xóa
exports.delete = async (req, res) => {
  await Supplier.findByIdAndDelete(req.params.id);
  res.redirect("/suppliers");
};
