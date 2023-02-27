import { Schema, model } from 'mongoose';

const produtcSchema = new Schema({
	title: {
		type: String,
		trim: true,
		required: true
	},
	image: {
		type: String,
		trim: true,
		required: true	
	},
	category: {
		type: String,
		trim: true,
		required: true
	},
	brand: {
		type: String,
		trim: true,
		required: true
	},
	stock: {
		type: Number,
		trim: true,
		required: true
	}				
});

export default model('Products', produtcSchema);