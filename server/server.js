'use strict';

const express = require('express');
const { json } = require('body-parser');

const app = express();

const { connect, tasks } = require('../db/database');

const PORT = process.env.PORT || 3000;
app.set('port', PORT);




//middlewares
app.use(express.static('client'));
app.use(json());


// API

const Tasks = tasks();
app.get('/api/tasks', (req, res, err) => {
	// console.log("api get tasks");
	Tasks.find()
		.then(tasks => res.json( { tasks } ))
		.catch(err)
})



connect()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Mongoose server listening on port: ${PORT}`);
		});
	})
	.catch(console.error)
