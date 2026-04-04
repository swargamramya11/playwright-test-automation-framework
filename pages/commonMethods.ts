import { Page, expect, Locator } from '@playwright/test'
import { TestData } from '../utils/testData';

export class CommonMethods {
  private readonly page: Page;
  private testData: TestData;

  constructor(page: Page, testData: TestData) {
    this.page = page
    this.testData = testData
  }

  async verifyErrorMessage(fieldName: string, expectedErrorMessage:string) {
    expect(this.page.locator("//label[text()='"+fieldName+"']//parent::div//div//div")).toHaveText(expectedErrorMessage) 
  }
}