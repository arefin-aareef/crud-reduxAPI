import Product from "../../models/productModel.js";

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products)
    // console.log('check', products);
    
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export default getAllProduct