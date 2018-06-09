exports.config = {
    specs: ['launch.spec.js'],
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions':{
            'args': ['--no-sandbox']
        }//'--headless','--disable-gpu',
      },
    allScriptsTimeout: 60000, 
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
      },
    baseUrl: 'http://127.0.0.1:4200/',

}