import React, { useContext } from 'react';
import ProductsContext from '../../context/products/productsContext.js';

const Pagination = () => {

	const { page, setPage, products } = useContext(ProductsContext);

	let total = products.total;
	let limit = products.limit;


	const totalPages = Math.ceil(total / limit);

	const handlePage = (newPage) => {
		setPage(newPage + 1);
	};

	return(
		<div>
		    <nav aria-label="Page navigation example">
		    	<ul className="pagination justify-content-center">
		    	{
					totalPages > 0 && [...Array(totalPages)].map((val, index) => {
						return (
							<li 
							key={index}
							className="page-item">
							<button  className="page-link" type="button" onClick={() => handlePage(index)}>{index + 1}</button>	
							</li>
						);
					})
				}
				</ul>
			</nav>
		</div>
	);
};
export default Pagination;