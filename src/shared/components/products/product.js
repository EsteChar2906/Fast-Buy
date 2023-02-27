import React from 'React';

const Product = ({title, image, category, brand}) => {
	return (
		<div className="card mb-3 text-center h-100">
			<div className="card-body">
				<img src={image} alt={title} className="card-image-top" width="80" height="100"/>
			<div>
				<h5 className="card-title">{title}</h5>
				<p className="card-text">category: {category}</p>
				<p className="card-text">brand: {brand}</p>
			</div>
			</div>
			<div className="d-grid gap-2 col-6 mx-auto mb-3">
				<button type="buton" className="btn btn-outline-success">Comprar</button>
			</div>
		</div>
	);
};

export default Product;