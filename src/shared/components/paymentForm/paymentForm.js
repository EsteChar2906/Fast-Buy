import React from 'react';
import { useCart } from 'react-use-cart';

const PaymentForm = () => {

	const { cartTotal } = useCart();


	return(
		<div className="mt-2">
			<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCompra" data-bs-whatever={cartTotal}>Comprar</button>
		
			<div className="modal fade" id="modalCompra" tabindex="-1" aria-labelledby="modalCompraLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="header text-center">
							<h1 className="modal-title fs-5" id="modalCompraLabel">Completa tus datos para pagar</h1>
						</div>
						<div className="modal-body">
							<form action="">
								<div className="mb-3">
									<label className="col-form-label" htmlFor="fullName">Nombre completo</label>
									<input type="text" className="form-control" id="fullName" />
								</div>
							</form>
						</div>
						<div class="modal-footer">
        					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        					<button type="button" class="btn btn-primary">Pagar</button>
      					</div>
					</div>					
				</div>
			</div>
		</div>		
	)
};

export default PaymentForm;