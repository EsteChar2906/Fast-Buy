import React from 'react';
import Home from './pages/Home.js';
import Payment from './pages/payment.js';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
	return (
		<div>
			<nav className="navbar bg-dark">
				<div className="container-fluid">
    				<Link to="/" className="navbar-brand text-white" >Fast Buy</Link>
    				<Link to="/payment" className="navbar-brand text-white">Carrito</Link>
    			</div>		
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Routes>
				<Route path="/payment" element={<Payment />} />
			</Routes>
		</div>
	)
}

export default App;