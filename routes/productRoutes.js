const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.index);
router.get("/new", productController.new);
router.post("/new", productController.create);
router.get("/edit/:id", productController.edit);
router.post("/edit/:id", productController.update);
router.get("/delete/:id", productController.delete);

module.exports = router;
