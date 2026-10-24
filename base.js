import { Builder, By } from 'selenium-webdriver';

class Base {
    constructor() {
        this.driver = new Builder()
            .forBrowser('chrome')
            .build();
    }

    async openBrowser() {
        await this.driver.get("https://www.npmjs.com/");
    }

    async closeBrowser() {
        await this.driver.quit();
    }
}
    const result = new Base();
    result.openBrowser(); 
    result.closeBrowser();