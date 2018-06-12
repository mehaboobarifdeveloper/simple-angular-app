exports.config = {
    specs: ['launch.spec.js'],
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
         'useAutomationExtension': false,
        'chromeOptions':{
            'args': ['--headless','--disable-gpu', '--no-sandbox', '--disable-extension', '--disable-dev-shm-usage']
        }//'--headless','--disable-gpu',--no-sandbox
      },
    allScriptsTimeout: 60000, 
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 30000,
      },
    baseUrl: 'http://localhost:4200/',
  
  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    var junitReporter = new jasmineReporters.JUnitXmlReporter({

      // setup the output path for the junit reports
      savePath: 'output/',

      // conslidate all true:
      //   output/junitresults.xml
      //
      // conslidate all set to false:
      //   output/junitresults-example1.xml
      //   output/junitresults-example2.xml
      consolidateAll: false

    });
    jasmine.getEnv().addReporter(junitReporter);
  }
  


}
