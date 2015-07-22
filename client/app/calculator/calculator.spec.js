(function() {
  'use strict';

  describe('The CalculatorController', function() {

    beforeEach(module('fudStoraj'));

    var controller;

    beforeEach(inject(function($controller) {
      controller = $controller('CalculatorController', {});
      controller.test = 'test';
      controller.adults = 2;
      controller.children = 3;
    }));

    it('should have a view model defined', function() {
      expect(controller.test).to.equal('test');
    });

    it('should get the number of people 12 and older', function() {
      expect(controller.adults).to.equal(2);
    });

    it('should get the number of people under 12', function() {
      expect(controller.children).to.equal(3);
    });

  });
}());
