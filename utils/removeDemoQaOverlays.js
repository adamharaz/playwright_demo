
/**
 * DemoQA can be annoying with overlays/footer blocking clicks
 * (Playwright version of your removeDemoQaOverlays)
 */

async function removeDemoQaOverlays(page) {
    await page.evaluate(() => {
      const ids = ['#fixedban'];
      const selectors = ['footer'];
  
      [...ids, ...selectors].forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => el.remove());
      });
    });
  }
  
  module.exports = { removeDemoQaOverlays };
  