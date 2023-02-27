import express from 'express';
import cors from 'cors';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { renderToString } from 'react-dom/server';
import morgan from 'morgan';
import App from '../shared/App.js';
import serialize from 'serialize-javascript';
import { PORT } from './config.js';
import productsRoutes from './routes/produtcs.routes.js';

const app = express();

app.set('port', PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(express.static('public'));

app.get("/", (req, res, next) => {
	if(req.url !== "/api/*"){
	const data = "Estefy"
	const html = renderToString(
		<StaticRouter
		location={req.url}
		context={{}}
		>
			<App />
		</StaticRouter>
	);

	res.send(`
		<!DOCTYPE html>
		<html>
		    <head>
		    	<meta charset="utf-8">
    			<meta name="viewport" content="width=device-width, initial-scale=1">
		       	<title>Fast Buy</title>
		       	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
		    </head>
		    <body>
		       	<script src="/bundle.js" defer></script>
		    	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
		    	<div id="root" >${html}</div>
		    </body>
		</html>
		`)
		} else {
			next();
		}

});

app.use("/api", productsRoutes);

export default app;