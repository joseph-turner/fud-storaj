'use strict';

describe('Controller: HomeCtrl', function () {

  // load module that the controller is associated with
  beforeEach(module('FudStoraj'));

  var HomeCtrl,
    scope;

  // Setup controller and mock it's scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('should have scope defined', function () {
    expect(scope.yeogurt).to.equal('awesome');
  });
});
