'use strict';

angular.module('meanExampleModule').factory('phoneService', ['$http', '$log', function($http, $log){
  var phoneService = {};

  phoneService.getPhones = function () {
    return $http.get('/api/phones').then(function(response) {
      return response.data;
    }, function(response) {
      $log.info(response);
    });
  };

  phoneService.getPhone = function (phoneId) {
    return $http.get('/api/phones/' + phoneId).then(function(response) {
      return response.data;
    }, function(response) {
      $log.info(response);
    });
  };

  return phoneService;
}]);