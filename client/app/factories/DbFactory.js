'use strict';

app.factory("DbFactory", function($q, $http) {

	const getTasks = () =>
		$q((resolve, reject) =>
			$http
				.get('/api/tasks')
				.then(({data: {tasks}}) => tasks ? resolve(tasks) : reject(null))
		)

	return { getTasks }

})
