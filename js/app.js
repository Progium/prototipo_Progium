'use strict';

var prototipo = {};

var App = angular.module('prototipo', ['prototipo.services', 'ngRoute']);

App.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
})

App.config(function($routeProvider, $locationProvider) {
  	$routeProvider
		.when('/iniciar-sesion', {
			templateUrl: '/iniciarsesion.html',
			controller: '/js/controller/MenuClienteController'
		})
		.otherwise({
        	redirectTo: '/iniciar-sesion'
		});

	//$locationProvider.html5Mode(true);
	//$httpProvider.responseInterceptors.push('responseHttpInterceptor');
});

// .config(function($routeProvider, $locationProvider) {
//   $routeProvider
//    .when('/Book/:bookId', {
//     templateUrl: 'book.html',
//     controller: 'BookController'
//   })
//   .when('/Book/:bookId/ch/:chapterId', {
//     templateUrl: 'chapter.html',
//     controller: 'ChapterController'
//   });
// });