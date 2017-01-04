'use strict';

app.controller("MainCtrl", function($scope, DbFactory){

	$scope.message = "existing tasks:";

	DbFactory.getTasks()
		.then((tasks) => $scope.tasks = tasks);

	$scope.addNewTask = () => {
		const newTask = {
			task: $scope.newTaskEntry
		};

		DbFactory.addTask(newTask)
			.then(data => {
				$scope.tasks.push(data.data);
				$scope.apply;
			});


	}
})
