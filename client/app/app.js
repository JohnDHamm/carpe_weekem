'use strict';

const app = angular
	.module('carpe-weekem', ['ngRoute'])
	.config(($routeProvider, $locationProvider) => {
		$routeProvider
			.when('/', {
				controller: 'MainCtrl',
				templateUrl: 'partials/main.html'
			})
			// .when('/chat', {
			// 	controller: 'ChatCtrl',
			// 	templateUrl: 'partials/chat.html'
			// })
			.otherwise('/', {
			})

		$locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
    })
	})
