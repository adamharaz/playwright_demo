// appium/tests/registration.ios.safari.spec.js
const { createIOSafariDriver } = require('../ios.safari.driver');

(async () => {
    const driver = await createIOSafariDriver();

    try {
        await driver.url('https://demoqa.com/automation-practice-form');
        const title = await driver.getTitle();
        console.log('Title:', title);
    } finally {
        await driver.deleteSession();
    }
})();
