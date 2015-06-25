'use strict';

/**
 * CateringBuscarController
 * @constructor
 */
App.controller('CateringBuscarController', function($scope, $location) {
    $scope.buscar = function () {
        $location.path('/listar-catering');
    }
  
});