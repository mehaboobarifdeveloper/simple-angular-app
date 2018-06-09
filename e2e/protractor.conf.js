exports.config = {
    specs: ['launch.spec.js'],
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions':{
            'args': ['--headless','--disable-gpu']
        }
      },
    allScriptsTimeout: 60000, 
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
      },
    baseUrl: 'http://localhost:4200/',

}