'use strict';

/**
 * CotizacionRegistrarController
 * @constructor
 */
App.controller('CotizacionRegistrarController', function($scope) {

    $scope.date = new Date(), 'dd/mm/yyyy'
    $scope.cantidad = {
        valor: 1
    };
    $scope.cantidad2 = {
        valor: 1
    };
});