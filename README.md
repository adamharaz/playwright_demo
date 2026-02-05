# playwright_demo
Got it. I’ll give you a **full, copy-paste ready README**, and I’ll explicitly include the **exact commands you are already using** in this project, no fluff, no invented tooling.

You can drop this straight into `README.md`.

---

```md
# Playwright JS Demo Automation Framework

This is a lightweight Playwright + JavaScript automation demo project.
It follows a clean, readable structure with reusable helpers and Mocha-based test execution.

This repo is meant to be practical, not over-engineered.

---

## Tech Stack
- Node.js
- Playwright (Chromium)
- JavaScript (CommonJS)
- Mocha
- Chai
- Allure (for reporting, optional)

---

## Project Structure
```

PLAYWRIGHT_DEMO/
│
├── methods/
│   ├── actions/
│   └── pages/
│
├── tests/
│   ├── registration.spec.js
│   └── rbc-launch.spec.js
│
├── utils/
│   ├── removeDemoQaOverlays.js
│   ├── smartClick.js
│   └── stubbornFill.js
│
├── data/
│   └── registration.data.js
│
├── allure-results/
├── test-results/
│
├── playwright.config.js
├── package.json
└── README.md

````

---

## Prerequisites
- Node.js (LTS recommended)
- npm

Verify:
```bash
node -v
npm -v
````

---

## Setup

### Install dependencies

```bash
npm install
```

### Install Playwright browsers

```bash
npx playwright install
```

---

## Running Tests

### Run a single test file

Example: registration test

```bash
npx mocha "tests/registration.spec.js" --timeout 60000
```

### Run another spec

```bash
npx mocha "tests/rbc-launch.spec.js" --timeout 60000
```

### Run all specs

```bash
npx mocha "tests/**/*.spec.js" --timeout 60000
```

Tip: If a test needs more time, increase the timeout intentionally, do not mask flakiness.

---

## Browser Configuration

Tests use Playwright Chromium directly:

```js
const { chromium } = require('playwright');
```

Headless mode can be toggled inside the test setup:

```js
browser = await chromium.launch({
  headless: true
});
```

Set `headless: false` when debugging locally.

---

## Utilities

Reusable helpers live under `utils/`.

Examples:

* `removeDemoQaOverlays` → removes blocking banners and footers
* `smartClick` → reliable click wrapper
* `stubbornFill` → handles flaky input fields

Tests stay readable, helpers handle DOM details.

---

## Test Data

Static or dynamic test data lives under `data/`.
Example:

```js
const testData = require('../data/registration.data');
```

---

## Reports (Allure)

### Generate Allure report

After running tests:

```bash
npx allure generate --clean
```

### Open Allure report

```bash
npx allure open
```

If Allure is not installed:

```bash
npm install -D allure-commandline
```

---

## Notes

* This project intentionally keeps configuration minimal.
* No `config/` folder unless real environment logic is introduced.
* Helpers are small, single-purpose files.
* Tests describe intent, not implementation details.

---

## Final Thought

Simple structure scales better than clever structure.
When the project grows, architecture can grow with it.

```

---


