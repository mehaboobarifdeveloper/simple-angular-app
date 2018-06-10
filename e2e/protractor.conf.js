exports.config = {
    specs: ['launch.spec.js'],
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
         'useAutomationExtension': false,
        'chromeOptions':{
            'args': ['--headless','--disable-gpu', '--remote-debugging-port=9229']
        }//'--headless','--disable-gpu',--no-sandbox
      },
    allScriptsTimeout: 60000, 
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 30000,
      },
    baseUrl: 'http://localhost:4200/',

}
