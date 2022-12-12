const { default: mongoose } = require("mongoose");
const Product = require("../models/product");

//get all products
const getAllProduct = async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 });

  res.status(200).json(products);
};

//get a single product
const getProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" });
  }
  const product = await Product.findById(id);

  if (!product) {
    res.status(404).json({ error: "No such product" });
  }

  res.status(200).json(product);
};

//create a new product
const createProduct = async (req, res) => {
  const { title, amount, date, imagePath, description, secondUrl } = req.body;
  try {
    const product = await Product.create({ title, amount, date, imagePath, description, secondUrl });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.mssg });
  }
};

//delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" });
  }
  const product = await Product.findOneAndDelete({ _id: id });

  if (!product) {
    res.status(404).json({ error: "No such product" });
  }

  res.status(200).json(product);
};

//update a product

const updateProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" });
  }
  const product = await Product.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!product) {
    res.status(404).json({ error: "No such product" });
  }

  res.status(200).json(product);
};

module.exports = {
  createProduct,
  getAllProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
