import app from './app.js';
import './db.js';

const main = () => {
	app.listen(app.get('port'), () => {
	console.log(`Server is listening on port: ${app.get('port')}`);
	})
}

main();