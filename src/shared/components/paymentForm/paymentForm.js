import React, { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import axios from 'axios';

const PaymentForm = () => {

	const [ data, setData ] = useState({
		nombre: '',
		email: '',
		direccion: '',
		items: []
	});

	const { cartTotal, items } = useCart();

	const handleChange = ({ currentTarget: input }) => {
		setData({
			...data,
			items: items,
			[input.name]: input.value
		})
	};

	const handleSubmit = () => {
		axios.post('/api/postOrders', data)
		.then((res) => {
		setData({
			nombre: '',
			email: '',
			direccion: '',
			items: []
		})
		})
		.catch((err) => {
		console.log(err)
	});

	}

	const reset = () => {
		setData({
			nombre: '',
			email: '',
			direccion: '',
			items: []
		})
	}

	return(
		<div className="mt-2">
			<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCompra" data-bs-whatever={cartTotal}>Comprar</button>
				<div className="modal fade" id="modalCompra" tabIndex="-1" aria-labelledby="modalCompraLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="header text-center">
							<h1 className="modal-title fs-5" id="modalCompraLabel">Completa tus datos para pagar</h1>
						</div>
						<div className="modal-body">
							<form action="">
								<div className="mb-3">
									<label className="col-form-label" htmlFor="fullName">Nombre: </label>
									<input type="text" className="form-control" id="fullName" name="nombre" onChange={handleChange}/>
								</div>
								<div className="mb-3">
									<label className="col-form-label" htmlFor="email">Email: </label>
									<input type="email" className="form-control" id="email" name="email" onChange={handleChange} />
								</div>
								<div className="mb-3">
									<label className="col-form-label" htmlFor="Direccion">Direccion</label>
									<input type="text" className="form-control" id="Direccion" name="direccion" onChange={handleChange} />
								</div>
							</form>
						</div>
						<div className="modal-footer">
        					<button type="button" onClick={reset} className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        					<button type="button" onClick={handleSubmit} className="btn btn-primary" data-bs-dismiss="modal">Pagar</button>
      					</div>
					</div>					
				</div>
			</div>
		</div>		
	)
};

export default PaymentForm;