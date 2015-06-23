'use strict';

var PrototipoProgium = {};

var App = angular.module('PrototipoProgium', ['PrototipoProgium.services', 'ngRoute']);

App.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
})

App.config(function($routeProvider, $locationProvider) {
  	$routeProvider
		.when('/iniciosesion', {
			templateUrl: 'iniciosesion.html',
			controller: 'IniciarSesionController'
		})
		.otherwise({
        	redirectTo: '/iniciosesion'
		});
});