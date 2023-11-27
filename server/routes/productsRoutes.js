import express from 'express';
import getAllProduct from '../controllers/products/getAllProduct.js';
import createProduct from '../controllers/products/createProduct.js';
import getSingleProduct from '../controllers/products/getSingleProduct.js';
import updateProduct from '../controllers/products/updateProduct.js';
import deleteProduct from '../controllers/products/deleteProduct.js';

const router = express.Router()

router.get('/products', getAllProduct)
router.get('/products/:id', getSingleProduct)
router.post('/products', createProduct);
router.patch('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)



export default router;
