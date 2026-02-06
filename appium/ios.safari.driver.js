
// appium/ios.safari.driver.js
const { remote } = require('webdriverio');
const caps = require('./ios.safari.caps');

async function createIOSafariDriver() {
  return remote({
    hostname: '127.0.0.1',
    port: 4723,
    path: '/', // if your Appium uses /wd/hub, change to '/wd/hub'
    capabilities: caps,
  });
}

module.exports = { createIOSafariDriver };
