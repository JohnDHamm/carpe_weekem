'use strict';

app.controller("MainCtrl", function($scope, DbFactory){

	$scope.message = "existing tasks:";

	DbFactory.getTasks()
		.then((tasks) => $scope.tasks = tasks);

})
