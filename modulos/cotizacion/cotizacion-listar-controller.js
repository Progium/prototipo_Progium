'use strict';

/**
 * CotizacionListarController
 * @constructor
 */
 
 
App.controller('CotizacionListarController', function($scope) {
    
    $scope.listaCotizaciones = [{
        nombre: "Yuliana Arias",
        fecha: "25 julio del 2015",
        hora: "11:00 AM",
        ubicacion: "Restaurante Picacho",
        estado: "Pendiente"
    }, {
        nombre: "Marcela Leandro",
        fecha: "28 agosto del 2015",
        hora: "11:00 AM",
        ubicacion: "Restaurante Casa Vieja",
         estado: "Reservado"
    },{
        nombre: "Josue Perez",
        fecha: "15 agosto del 2015",
        hora: "03:00 PM",
        ubicacion: "Pedregal",
        estado: "Rechazado"
    }];
});