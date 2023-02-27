import React, { useContext } from 'react';
import ProductsContext from '../../context/products/productsContext.js';

const FilterCategory = () => {

	const { setCategory, products } = useContext(ProductsContext);

	const categories = products.categories;
	
	const handleCategory = (e) => {
		e.preventDefault();
		const category = e.target.value;
		setCategory(category);
	};

	return(
			<div className="form-floating-sm" >
				<label htmlFor="categoty">Filtrar por categoria: </label>
				<select className="form-select-sm" name="category" id="category" onChange={handleCategory}>
					<option value="">All</option>
					{
						categories && categories.map((c, i) => {
							return (
								<option value={c} name="category" key={i}>{c}</option>
							);
						})
					}
				</select>
			</div>
	)
};

export default FilterCategory;