import React from 'react';
import ProductsState from '../context/products/productsState.js';
import Products from '../components/products/Products.js';
import Pagination from '../components/pagination/pagination.js';
import Header from '../components/header/header.js';

const Home = () => {
	return (
		<main>
			<ProductsState>
				<section>
					<div>
						<Header />
					</div>
				</section>
				<section>
					<div>
						<Products />
					</div>
				</section>
				<section>
					<div>
						<Pagination />
					</div>
				</section>
			</ProductsState>
		</main>
		)
};

export default Home;