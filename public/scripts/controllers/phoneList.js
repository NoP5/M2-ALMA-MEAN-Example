'use strict';

angular.module('meanExampleModule').controller('PhoneListCtrl', ['$scope', 'phoneService', function ($scope, phoneService) {
  phoneService.getPhones().then(function (phones) {
  	$scope.phones = phones;
  });
  
  $scope.orderProp = 'age';
}]);