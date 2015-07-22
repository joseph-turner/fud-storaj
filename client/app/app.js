(function() {
  'use strict';
  // Declare app level module which depends on views, and components
  angular.module('fudStoraj', [
      'ngAnimate',
      'ngRoute'
    ])
    .config(config);

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .when('/calculator', {
        templateUrl: '/app/calculator/calculator.html',
        controller: 'CalculatorController',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
}());
