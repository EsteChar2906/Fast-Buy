const React = require('react')
const nodemailer = require('nodemailer');
const { EMAIL_APP, PASSWORD_APP } = require('../config.js');

const createTransporter = () => {
	var transport = nodemailer.createTransport({
		host: "smtp.gmail.com",
        auth: {
        	user: EMAIL_APP,
        	pass: PASSWORD_APP
       }
	});
	return transport;
}

export const send_Mail = async (correo, nombres, items, direccion) => {
	const transport = createTransporter();
	const mail = await transport.sendMail({
		from: `Pago exitoso <fleamarket.appservices@gmail.com>`,
		to: correo,
		subject: 'Su pago se ha registrado correctamente',
		text: 'Se le informa que ha realizado la compra de sus productos y se procedera con el envio de los productos',
		html: `<div><h3>Pago exitoso</h3><p>El usuario ${nombres} ha realizado una compra en Fast Buy y muy pronto sera enviado a su domicilio ${direccion} </p></div>`
		})

	console.log("message send")
};
