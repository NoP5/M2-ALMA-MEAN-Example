'use strict';

angular.module('meanExampleModule').controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'phoneService', function ($scope, $routeParams, phoneService) {
  phoneService.getPhone($routeParams.phoneId).then(function (phone) {
  	$scope.phone = phone;
  	$scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function (imageUrl) {
    $scope.mainImageUrl = imageUrl;
  };
}]);
