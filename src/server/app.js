import express from 'express';
import cors from 'cors';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { renderToString } from 'react-dom/server';
import morgan from 'morgan';
import App from '../shared/App.js';
import { PORT, DOMINIO } from './config.js';
import productsRoutes from './routes/produtcs.routes.js';
import ordersRoutes from './routes/orders.routes.js';
const app = express();

app.set('port', PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(express.static('public'));
app.use(express.json({limit : 52428800,extended : true}));
app.use(express.urlencoded({limit : 52428800,extended : true}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', DOMINIO);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use("/api", productsRoutes);
app.use("/api", ordersRoutes);

app.get("*", (req, res, next) => {
		const context = {};
		const html = renderToString(
		<StaticRouter
		location={req.url}
		context={context}
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
		    		<script src="/modalBuy.js" defer></script>
		       	<script src="/bundle.js" defer></script>
		    		<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
						<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
		    		<div id="root" >${html}</div>
		    </body>
		</html>
		`)

});


export default app;