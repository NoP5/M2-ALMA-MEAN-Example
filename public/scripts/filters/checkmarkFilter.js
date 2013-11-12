'use strict';

angular.module('meanExampleModule').filter('checkmark', [function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
}]);
