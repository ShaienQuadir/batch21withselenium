
const { Builder } = require("selenium-webdriver");
const assert = require("node:assert/strict");

async function firstTest() {
    const driver = await new Builder()
        .forBrowser("chrome")
        .build();

    try {
        // Step 1: Open website
        await driver.get("https://www.google.com");

        // Step 2: Get page title
        const title = await driver.getTitle();

        console.log("Page Title:", title);

        // Step 3: Verify page title
        assert.ok(
            title.includes("Google"),
            "FAIL: Google title was not found"
        );

        console.log("PASS: Google title is correct");

    } catch (error) {
        console.error("FAIL:", error.message);
        throw error;

    } finally {
        // Step 4: Close browser
        await driver.quit();
    }
}

firstTest().catch(() => {
    process.exitCode = 1;
});
