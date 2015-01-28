'use strict';

// Declare app level module which depends on views, and components
angular.module('FudStoraj', [
  'ngRoute'
])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.otherwise({redirectTo: '/'});

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);

console.log('Welcome to Yeogurt!');
