import { expect, Page } from '@playwright/test'


export class CheckoutStepOnePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async fillInYourInformation(firstName: string, lastName: string, postalCode: string) {
        await this.page.waitForSelector('input[id=first-name]')
        await this.page.type('input[id=first-name]', firstName)
        await this.page.type('input[id=last-name]', lastName)
        await this.page.type('input[id=postal-code]', postalCode)

        const checkoutButtonIsVisible = this.page.locator('#continue')
        await expect(checkoutButtonIsVisible).toBeVisible()
    }

    async redirectToCheckoutStepTwoPage() {
        await this.page.click('#continue')
        const titleVisible = this.page.locator('.title')
        await expect(titleVisible).toHaveText('Checkout: Overview')
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
    }

}