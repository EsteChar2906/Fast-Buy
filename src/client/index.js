import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrateRoot } from 'react-dom/client';
import { CartProvider } from 'react-use-cart';

import App from '../shared/App.js';

hydrateRoot(
	document.getElementById('root'),
	<StrictMode>
		<CartProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CartProvider>
	</StrictMode>
);