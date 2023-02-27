import React from 'React';

const Product = ({title, image, category, brand}) => {
	return (
		<div className="card mb-3 text-center h-100">
			<div class="card-body">
				<img src={image} alt={title} class="card-image-top" width="80" height="100"/>
			<div>
				<h5 class="card-title">{title}</h5>
				<p class="card-text">category: {category}</p>
				<p class="card-text">brand: {brand}</p>
			</div>
			</div>
			<div class="d-grid gap-2 col-6 mx-auto mb-3">
				<button type="buton" class="btn btn-outline-success">Comprar</button>
			</div>
		</div>
	);
};

export default Product;