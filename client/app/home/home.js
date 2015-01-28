'use strict';

angular.module('FudStoraj')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/home/home.html',
        controller: 'HomeCtrl'
      });
  });
