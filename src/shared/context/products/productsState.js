import React, { useEffect, useReducer, useState } from "react";
import ProductsContext from "./productsContext.js";
import ProductsReducer from "./productsReducer.js";
import axios from "axios";

const ProductsState = ({ children }) => {

	const initialState = {
		products: [],
	}

	const [ state, dispatch ] = useReducer(ProductsReducer, initialState);

	const [category, setCategory] = useState('All');
    const [brand, setBrand] = useState('');
    const [title, setTitle] = useState('');
    const [page, setPage] = useState(1);
	const [sort, setSort] = useState('');

	useEffect(() => {
		getProducts(category, brand, title, page, sort);
	}, [category, brand, title, page, sort]);

	const getProducts = async () => {
		const response = await axios(`/api/products?category=${category}&brand=${brand}&title=${title}&page=${page}&sort=${sort}`)
		.then((res) => {
			dispatch({
				type: "GET_PRODUCTS",
				payload: res.data
			})
		})
		.catch((err) => {
			console.log(err)
		})
	};

	return (
		<ProductsContext.Provider value={{
			products: state.products,
			setCategory,
			setBrand,
			setTitle,
			setPage,
			setSort
		}} >
			{ children }
		</ProductsContext.Provider>
	);
};

export default ProductsState;