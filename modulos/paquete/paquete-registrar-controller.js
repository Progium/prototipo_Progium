'use strict';

/**
 * PaqueteRegistrarController
 * @constructor
 */
App.controller('PaqueteRegistrarController', function($scope) {
    
    $scope.cantidad = {
        valor: 1
    };
    
     $scope.myData = [{name: "Moroni", age: 50},
                     {name: "Tiancum", age: 43},
                     {name: "Jacob", age: 27},
                     {name: "Nephi", age: 29},
                     {name: "Enos", age: 34}];
    $scope.gridOptions = { data : 'myData' };
});