'use strict';

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'chrome',
  },
  specs: ['./tests/ionicLocator.spec.js'],
  onPrepare: function () {
    require('./index')(protractor);
  },
  baseUrl: "http://localhost:3000",
  framework: 'jasmine',
  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    includeStackTrace: true
  }
};
