describe("Application Launch",()=>{
    it("Launch application in browser",()=>{
        browser.get("/");
        browser.wait(()=>{
            return element(by.css('app-root h1')).isPresent();
        },30000);
        expect(element(by.css('app-root h1')).getText()).toEqual("Welcome to app!");
    })
    //Test comments in the branch
    //one more
    //another more
    //another another more
});