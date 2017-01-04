'use strict';

app.controller("MainCtrl", function($scope, DbFactory){

	// DbFactory.getTasks()
	// 	.then((tasks) => $scope.tasks = tasks);
	const loadTasks = () => {
		DbFactory.getTasks()
		.then((tasks) => $scope.tasks = tasks);
	}

	loadTasks();


	$scope.addNewTask = () => {
		const newTask = {
			task: $scope.newTaskEntry
		};

		DbFactory.addTask(newTask)
			.then(data => {
				$scope.tasks.push(data.data);
				$scope.newTaskEntry = "";
				$scope.apply;
			});

	}

	$scope.removeTask = id => {
		DbFactory.deleteTask(id)
			.then(data => loadTasks())
	}



})
