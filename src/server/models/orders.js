import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
	priceTotal: {
		type: Number, 
		required: true
	},
	user: {
		type: String,
        require: true,
	},
	product: {
		type: Array,
        require: true
	},
	totalProducts: {
		type: Number
	},
	status: {
		type: String, 
		required: true
	}
})

export default model("Orders", orderSchema);