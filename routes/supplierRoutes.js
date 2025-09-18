const express = require("express");
const router = express.Router();
const supplierController = require("../controllers/supplierController");

router.get("/", supplierController.index);
router.get("/new", supplierController.new);
router.post("/new", supplierController.create);
router.get("/edit/:id", supplierController.edit);
router.post("/edit/:id", supplierController.update);
router.get("/delete/:id", supplierController.delete);

module.exports = router;
