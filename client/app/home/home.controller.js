(function() {
  'use strict';

  angular.module('fudStoraj')
    .controller('HomeController', HomeController);

  function HomeController() {
      var vm = this;
      vm.test = 'awesome';
  }
}());
