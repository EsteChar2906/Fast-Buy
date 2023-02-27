import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Product = ({title, image, category, brand, price, stock, id}) => {

	const { addItem, totalItems } = useCart();
	return (
		<div className="col-6">
			<div className="card mb-3 text-center h-100">
				<div className="card-body">
					<img src={image} alt={title} className="img-fluid img-thumbnail h-50" />
				<div>
					<h5 className="card-title">{title}</h5>
					<p className="card-text">categoria: {category}</p>
					<p className="card-text">Marca: {brand}</p>
					<p className="card-text">Cantidad: {stock}</p>
				</div>
				</div>
				<div className="d-grid gap-2 mx-auto d-md-block mb-3">
					<button type="button" onClick={() => addItem({title, image, category, brand, price, stock, id})} className="btn btn-outline-success mx-1"> {price}$ Agregar al carrito</button>
					<Link to="/payment" > <button type="button" className="btn btn-outline-success mx-1">Ir al carrito ({totalItems})</button></Link>
				</div>
			</div>
		</div>
	);
};

export default Product;