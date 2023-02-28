import Orders from '../models/orders.js';
import { send_Mail } from '../nodemailer/mail.js';

export const postOrders = async (req, res) => {
	try{
		let { nombre, email, direccion, items } = req.body;
		if(!nombre || !email || !direccion || !items){
			return res.status(404).json({message: 'No se ha comprado ningun elemento'})
		} else{

			send_Mail(email, nombre, items, direccion);
			res.status(200).json({message: "Tu pago se ha realizado"})
		}
	} catch(err){
		res.status(500).json({message: err.message})
		console.log(err.message, err)
	}
}