import Product from "../../models/productModel.js";

const updateProduct = async (req, res) => {
  try {
    const product = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      product
    )
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export default updateProduct