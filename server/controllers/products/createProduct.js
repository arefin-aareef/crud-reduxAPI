import Product from "../../models/productModel.js";

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export default createProduct;