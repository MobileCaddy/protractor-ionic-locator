'use strict';

var config = {
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

// If this is running on [Travis](http://travis-ci.org) then we add additional details to run the tests on the
// [Sauce labs](https://saucelabs.com/opensource/travis) cloud.
if (process.env.TRAVIS) {
  config.sauceUser = process.env.SAUCE_USERNAME;
  config.sauceKey = process.env.SAUCE_ACCESS_KEY;
  config.capabilities['tunnel-identifier'] = process.env.TRAVIS_JOB_NUMBER;
} else {
  config.seleniumAddress = 'http://localhost:4444/wd/hub'
}

exports.config = config;
