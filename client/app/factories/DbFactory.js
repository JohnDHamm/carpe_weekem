'use strict';

app.factory("DbFactory", function($q, $http) {

	const getTasks = () =>
		$q((resolve, reject) =>
			$http
				.get('/api/tasks')
				.then(({data: {tasks}}) => tasks ? resolve(tasks) : reject(null))
		)

	const addTask = newTask =>
		$q((resolve, reject) =>
			$http
				.post('/api/tasks', newTask)
				.then(data => data ? resolve(data) : reject(null))
		)

	return { getTasks, addTask }

})
