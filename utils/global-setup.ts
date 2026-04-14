import fs from 'fs';

async function globalSetup() {
  if (fs.existsSync('resources/reports/allure-results')) {
    fs.rmSync('resources/reports/allure-results', { recursive: true, force: true });
  }
}

export default globalSetup;