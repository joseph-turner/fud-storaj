(function() {
  'use strict';

  describe('The HomeController', function () {

    // load module that the controller is associated with
    beforeEach(module('fudStoraj'));

    var HomeController;

    // Setup controller and mock it's scope
    beforeEach(inject(function ($controller) {
      HomeController = $controller('HomeController', {});
      HomeController.test = 'test';
    }));

    it('should have a view model defined', function () {
      expect(HomeController.test).to.equal('test');
    });
  });
}());
