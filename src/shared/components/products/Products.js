import React, { useContext } from 'react'
import ProductsContext from '../../context/products/productsContext.js';
import Product from './product.js';

const Products = () => {

	const { products } = useContext(ProductsContext);
	
	const productsRender = products.products;
	return (
		<div className="container">
			<div className="row">
				<div className="row row-cols-1 row-cols-md-3 g-4">
					{productsRender && productsRender.map((p, index) => {
						return (
							<Product
							key={index}
							title={p.title}
							category={p.category}
							brand={p.brand}
							image={p.image}
							price={p.price}
							stock={p.stock}
							id={p._id}
							/>						
						)
					})}
				</div>
			</div>
		</div>
	);
};

export default Products;