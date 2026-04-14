import { execSync } from 'child_process';

async function globalTeardown() {
  console.log("Generating Allure Report...");

  execSync(
    'npx allure generate resources/reports/allure-results -o resources/reports/allure-report --clean --single-file',
    { stdio: 'inherit' }
  );

  console.log("Allure Report Generated!");
}

export default globalTeardown;