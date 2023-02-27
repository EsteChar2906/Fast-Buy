import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrateRoot } from 'react-dom/client';
import App from '../shared/App.js';

hydrateRoot(
	document.getElementById('root'),
	<BrowserRouter>
		<App />
	</BrowserRouter>
);