// methods/actions/LaunchActions.js
const { expect } = require('@playwright/test');
const { LaunchPage } = require('../pages/LaunchPage');

class LaunchActions {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.launchPage = new LaunchPage(page);
    }

    async openLaunchAndValidate() {
        await this.launchPage.goto();

        // basic sanity checks (site is up, page loaded, URL looks right)
        await expect(this.page.locator(this.launchPage.pageReadySelector)).toBeVisible();
        await expect(this.page).toHaveURL(/rbcroyalbank\.com\/launch/i);

        // optional: title check, but keep it loose since marketing pages change a lot
        const title = await this.page.title();
        expect(title.length).toBeGreaterThan(0);

        await expect(this.page).toHaveURL(/rbcroyalbank\.com\/launch/i);
        // await this.page.waitForTimeout(3 * 60 * 1000);

    }
}

module.exports = { LaunchActions };
