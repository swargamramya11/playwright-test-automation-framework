import { test, expect } from '../utils/hooks';
import { ReusableMethods } from '../utils/reusableMethods';

test("Add Cookies", { tag: ['@cookies'] }, async ({ page }) => {
  let reusableMethods = new ReusableMethods(page)

  await reusableMethods.addCookies([
    {
      name: 'mycookie',
      value: '123456',
      url: 'https://testautomationpractice.blogspot.com/',
    }])
  
    await reusableMethods.getCookies()
})