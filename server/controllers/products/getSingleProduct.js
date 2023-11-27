import Product from "../../models/productModel.js";

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export default getSingleProduct