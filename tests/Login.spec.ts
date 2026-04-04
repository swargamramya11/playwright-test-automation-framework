import { test, expect } from '../utils/hooks';
import { RandomDataUtil } from '../utils/randomDataGenerator'
import { TestConfig } from '../testdata/test.config'
import { DataProvider } from '../utils/dataproviders'
import { LoginPage } from '../pages/LoginPage'

const jsonPath = 'testdata/logindata.json'
const data = DataProvider.getTestDataFromJson(jsonPath)

for (const dataset of data) {
  test(`User Login with ${dataset.email}`, {tag: ['@smoke'] }, async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.enterEmail(dataset.email)
    await loginPage.enterPassword(dataset.password)
    await loginPage.clickLogin()
    await page.waitForTimeout(5000)
  });
}