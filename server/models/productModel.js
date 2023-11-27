import mongoose from "mongoose";

const schema = mongoose.Schema(
	{
		name: { type: String, required: [true, 'name is required'] },
		price: { type: Number, required: [true, 'price is required'] },
		note: { type: String, required: false },
		description: { type: String, required: false },
		category: { type: String, required: false },
		stock: { type: Number, required: false, default: 0 },
	},
	{
		timestamps: true
	}
);

const Product = mongoose.model('Product', schema)

export default Product;