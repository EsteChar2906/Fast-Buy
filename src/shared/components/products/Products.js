import React, { useContext } from 'react'
import ProductsContext from '../../context/products/productsContext.js';
import Product from './product.js';

const Products = () => {

	const { products } = useContext(ProductsContext);
	
	const productsRender = products.products;
	return (
		<div class="container">
			<div class="row">
				<div class="row row-cols-1 row-cols-md-3 g-4">
					{productsRender && productsRender.map((p) => {
						return (
							<div key={p._id} class="col" >
								<Product
								title={p.title}
								category={p.category}
								brand={p.brand}
								image={p.image}
								/>
							</div>						
							)
					})}
				</div>
			</div>
		</div>
	);
};

export default Products;