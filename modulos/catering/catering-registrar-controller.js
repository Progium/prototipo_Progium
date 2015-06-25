'use strict';

/**
 * CateringRegistrarController
 * @constructor
 */

App.controller('CateringRegistrarController', function($scope, $location) {

    $scope.cantidad = {
        valor: 1
    };

    $scope.guardar = function(){
        alert('El catering service ha sido registrado correctamente.');
    };
});