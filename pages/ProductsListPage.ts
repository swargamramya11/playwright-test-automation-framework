import { Page, expect, Locator } from '@playwright/test'
import { TestData } from '../utils/testData';
import { DataProvider } from '../utils/dataproviders';

export class ProductsListPage {
  private readonly page: Page;
  private testData: TestData;
  private readonly products: Locator;

  constructor(page: Page, testData: TestData) {
    this.page = page
    this.testData = testData
    this.products = page.locator('.card-body b')
  }

  async getProductsList() {
    await this.page.waitForLoadState('networkidle')
    const productsList: any[] = await this.products.allInnerTexts()
    let data = productsList.map(p=>({ProductName:p}))
    return data
  }
}