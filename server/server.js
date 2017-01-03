'use strict';

const express = require('express');

const app = express();

const { connect } = require('../db/database');

const PORT = process.env.PORT || 3000;
app.set('port', PORT);




//middlewares
app.use(express.static('client'));
// app.use(json())




// app.listen(PORT, () => {
// 	console.log(`Express server listening on port ${PORT}`)
// })

connect()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Mongoose server listening on port: ${PORT}`);
		});
	})
	.catch(console.error)
