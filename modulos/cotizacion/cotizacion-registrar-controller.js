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
    
    $scope.productos = [{
        nombre: "Arroz con pollo",
        costo: "2700"
    }, {
        nombre: "Carne en salsa",
        costo: "2600"
    },{
        nombre: "Lasaña de carne",
        costo: "2800"
    }];
});