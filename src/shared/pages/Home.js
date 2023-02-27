import React from 'react';
import ProductsState from '../context/products/productsState.js';
import Products from '../components/products/Products.js';
const Home = () => {
	return (
		<main>
			<ProductsState>
				<section>
					<div>
						<Products />
					</div>
				</section>
			</ProductsState>
		</main>
		)
};

export default Home;