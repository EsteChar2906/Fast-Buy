import React from 'react';
import Home from './pages/Home.js';
import { Routes, Route } from 'react-router-dom';

const App = ({data}) => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	)
}

export default App;