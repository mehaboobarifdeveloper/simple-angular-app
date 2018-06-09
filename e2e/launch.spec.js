describe("Application Launch",()=>{
    it("Launch application in browser",()=>{
        browser.ignoreSynchronization = true;
        browser.get("http://localhost:4200/");
        browser.wait(()=>{
            return element(by.name('userName')).isPresent();
        },30000);
        element(by.name('userName')).sendKeys("testing");
        expect(element(by.name('userName')).isPresent()).toBe(true);
    })
});