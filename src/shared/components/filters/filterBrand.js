import React, { useContext } from 'react';
import ProductsContext from '../../context/products/productsContext.js';

const FilterBrand = () => {

	const { setBrand, products } = useContext(ProductsContext);

	const brands = products.brands;

	const handleBrand = (e) => {
		e.preventDefault();
		const brand = e.target.value;
		setBrand(brand)
	};

	return(
		<div>
			<div className="form-floating-sm">
				<label htmlFor="brand">Filtrar por marca: </label>
				<select className="form-select-sm" name="brand" id="brand" onChange={handleBrand} >
					<option value="">All</option>
					{
						brands && brands.map((b, i) => {
							return(
								<option value={b} key={i} name={b} >{b}</option>
							);
						})
					}
				</select>
			</div>
		</div>
		)
};

export default FilterBrand;