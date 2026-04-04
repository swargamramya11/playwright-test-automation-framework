import { test as base } from '@playwright/test';
import { TestConfig } from '../testdata/test.config'
import { ReusableMethods } from './reusableMethods'
import { TestData } from '../utils/testData'

type MyFixtures = {
  testData: TestData
}

export const test = base.extend<MyFixtures>({
  testData: async ({}, use) => {
    await use({} as TestData)
  }
})

test.beforeEach(async ({ page }) => {
  console.log('Running before each test');
  await page.goto(ReusableMethods.getProperty("URL"));
})

test.afterEach(async ({ page }) => {
  console.log('Running after each test');
  await page.close()
})

export const expect = test.expect;