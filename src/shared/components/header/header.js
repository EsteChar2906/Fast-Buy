import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../../context/products/productsContext.js';
import FilterCategory from '../filters/filterCategory.js';
import FilterBrand from '../filters/filterBrand.js';
const Header = () => {

	const { setTitle } = useContext(ProductsContext);

	const handleSearch = (e) => {
		setTitle(e.target.value);	
	};

	return(
		<header>
			<section className="container p-4 text-center">
				<div className="row gx-5">
					<div className="col">
						<form className="d-flex" role="search">
        					<input 
        					className="form-control me-2" 
        					type="search" 
        					placeholder="Search" 
        					aria-label="Search" 
        					onChange={handleSearch}
        					/>
      					</form>
					</div>
					<div className="col">
						<FilterCategory />
					</div>
					<div className="col">
						<FilterBrand />
					</div>
				</div>
			</section>
		</header>
	);
};

export default Header;