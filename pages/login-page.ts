import { expect, Page } from '@playwright/test'


export class LoginPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async go() {
        await this.page.goto('https://www.saucedemo.com/');
        const title = this.page.locator('.login_logo')
        await expect(title).toBeVisible()
    }

    async sigIn(user: string, password: string) {
        await this.page.waitForSelector('input[id=user-name]')
        await this.page.type('input[id=user-name]', user)
        await this.page.fill('input[id=password]', password)
        await this.page.click('input[id=login-button]')
    }

    async userLoggedIn() {
        const titleVisible = this.page.locator('.title')
        await expect(titleVisible).toHaveText('Products')
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
    }

}