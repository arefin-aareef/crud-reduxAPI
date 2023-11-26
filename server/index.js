import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const port = 5000;

// mongo db

import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sypbrfe.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	try {
		// await client.connect();

		const productsCollection = client.db('crudDB').collection('products');

		app.get('/products', async (req, res) => {
			const result = await productsCollection.find().toArray();
			res.send(result);
		});

		app.get('/products/:id', async (req, res) => {
			const id = req.params.id;
			const query = { _id: new ObjectId(id)};
			const result = await productsCollection.findOne(query);
			res.send(result);
		});

		app.patch('/products/:id', async (req, res) => {
			const id = req.params.id;
			const query = {_id : new ObjectId(id)};
			const result = await productsCollection.updateOne(query ,{ $set: req.body });
			res.send(result)
		})

		app.delete('/products/:id', async (req, res) => {
			const id = req.params.id;
			const query = {_id : new ObjectId(id)};
			const result = await productsCollection.deleteOne(query);
			res.send(result);
		})
		app.post('/products', async (req, res) => {
			const item = req.body;
			const result = await productsCollection.insertOne(item)
			res.send(result)
		})

		await client.db('admin').command({ ping: 1 });
		console.log(
			'Pinged your deployment. You successfully connected to MongoDB!'
		);
	} finally {
		// Ensures that the client will close when you finish/error
		// await client.close();
	}
}
run().catch(console.dir);

app.get('/', (req, res) => {
	res.send('App is running');
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
