'use strict';

describe('protractor-ionic-locator', function () {
  var _beforeAll = false;
  beforeEach(function () {
    if (_beforeAll) return;
    else {
      browser.get('http://localhost:3000');
      _beforeAll = true;
    }
  });

  describe('by.collRepeater', function () {
    it('by.collRepeater locator is defined', function () {
      expect(by.collRepeater).toBeDefined();
    });

    it ('finds and element by collRepeater', function(){
      expect(element(by.collRepeater('item in list')).isPresent()).toEqual(true);
    });

    it ('finds 20 items in collRepeater', function(){
      expect(element.all(by.collRepeater('item in list')).count()).toEqual(20);
    });

  });
});
