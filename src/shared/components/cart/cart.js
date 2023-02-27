import React from 'react';
import { useCart } from 'react-use-cart';
import PaymentForm from '../paymentForm/paymentForm.js';

const Cart = () => {

	const { 
		items,
		isEmpty,
		totalUniqueItems,
		totalItems,
		cartTotal,
		updateItemQuantity,
		removeItem,
		emptyCart,
	} = useCart();

	const addingCart = (id, quantity, stock) => {

		if(quantity < stock && quantity >= 0){
			updateItemQuantity(id, quantity + 1)
		}
	};

	if(isEmpty) return <h1 className="text-center"> Carrito vacio</h1>

	return (
		<section className="py-4 container" >
			<div className="row justify-content-center">
				<div className="col-12" >
					<div>
						<h5>Carrito ({totalUniqueItems}) con productos ({totalItems})</h5>
					</div>
					<table className="table table-ligth table-hover m-0">
				    	<tbody>
							{  
								items && items.map((p, i) => {
									return(
										<tr key={i}>
											<td>
												<img src={p.image} alt={p.title} style={{height: '6rem'}} />
											</td>
											<td>{p.title}</td>
											<td>{p.price} $</td>
											<td>{p.stock} </td>
											<td>Cantidad: ({p.quantity}) unidades</td>
											<td>
												<button className="btn btn-info ms-2"
												onClick={() => updateItemQuantity(p.id, p.quantity - 1)}>-</button>
												<button className="btn btn-info ms-2"
												onClick={() => addingCart(p.id, p.quantity, p.stock)}>+</button>
												<button className="btn btn-danger ms-2"
												onClick={() => removeItem(p.id)}>Remover producto</button>
											</td>
										</tr>
									)
								})
							}
						</tbody>
					</table>
				</div>
				<div className="col-auto ms-auto">
					<h4>Total: {cartTotal} $</h4>
				</div>
				<div className="d-flex flex-row-reverse">
					<div>
						<button type="button" className="btn btn-danger m-2"
						onClick={() => emptyCart()} >Resetear carrito</button>
					</div>
					<PaymentForm />
				</div>
			</div>
		</section>
	);
};

export default Cart;
