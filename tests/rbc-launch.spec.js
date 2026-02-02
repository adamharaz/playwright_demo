// tests/rbc-launch.spec.js
const { test } = require('@playwright/test');
const { LaunchActions } = require('../methods/actions/LaunchActions');

test.describe('RBC Launch', () => {
    test('should open the launch page', async ({ page }) => {
        const actions = new LaunchActions(page);
        await actions.openLaunchAndValidate();
    });
});
