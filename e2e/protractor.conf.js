// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var jasmineReporters = require('jasmine-reporters');

exports.config = {
  allScriptsTimeout: 18000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  //ubuntu export DBUS_SESSION_BUS_ADDRESS=/dev/null and no longer have any hanging chromedriver processes!
  capabilities: {
    browserName: 'chrome',
      chromeOptions: {
        args: [ "--headless", "--disable-gpu", "--window-size=800x600", "--disable-dev-shm-usage"]
        }
  },//"--window-size=1800,1100",
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    // jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(
    //   // new Jasmine2HtmlReporter({
    //   //   savePath: 'target/screenshots',
    //   //   takeScreenshots: false,
    //   //   cleanDestination: false
    //   // })
       new jasmineReporters.JUnitXmlReporter(
       {
        savePath: 'test-output',
        filePrefix: 'ng-e2e-results',
        consolidateAll: true
       }
      ));
  }
};
