const express = require("express");
const Product = require("../models/product");
const {
  createProduct,
  getAllProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

const router = express.Router();

//Get all products
router.get("/", getAllProduct);

//Get a single product
router.get("/:id", getProduct);

//Post a new product
router.post("/", createProduct);

//Delete a new product
router.delete("/:id", deleteProduct);

//Update a new product
router.patch("/:id", updateProduct);

module.exports = router;
