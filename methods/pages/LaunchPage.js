// methods/pages/LaunchPage.js
class LaunchPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        // “Good enough” generic checks for a public landing page
        this.pageReadySelector = 'body';
    }

    async goto() {
        await this.page.goto('https://www.rbcroyalbank.com/launch', {
            waitUntil: 'domcontentloaded',
        });
    }
}

module.exports = { LaunchPage };
