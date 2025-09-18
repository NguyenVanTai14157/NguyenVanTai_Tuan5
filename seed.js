require("dotenv").config();
const mongoose = require("mongoose");
const Supplier = require("./models/Supplier");
const Product = require("./models/Product");

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected...");

    // Xóa dữ liệu cũ
    await Supplier.deleteMany({});
    await Product.deleteMany({});

    // Thêm supplier mẫu
    const suppliers = await Supplier.insertMany([
      { name: "Supplier A", address: "HCM City", phone: "0901112222" },
      { name: "Supplier B", address: "Ha Noi", phone: "0903334444" },
      { name: "Supplier C", address: "Da Nang", phone: "0905556666" }
    ]);

    console.log("✅ Suppliers seeded!");

    // Thêm product mẫu (tham chiếu đến supplier)
    await Product.insertMany([
      { name: "Product 1", address: "HCM", phone: "0123456789", supplierId: suppliers[0]._id },
      { name: "Product 2", address: "Ha Noi", phone: "0987654321", supplierId: suppliers[1]._id },
      { name: "Product 3", address: "Da Nang", phone: "0911223344", supplierId: suppliers[2]._id }
    ]);

    console.log("✅ Products seeded!");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
    console.log("🔌 MongoDB disconnected");
  }
}

seedData();
