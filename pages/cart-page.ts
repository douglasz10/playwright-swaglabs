import { expect, Page } from '@playwright/test'


export class CartPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async viewProductsOnTheCartPage() {
        const labelSauceLabsOnesieProduct = this.page.locator('#item_2_title_link')
        await expect(labelSauceLabsOnesieProduct).toHaveText('Sauce Labs Onesie')
        const priceSauceLabsOnesieProduct = this.page.locator('.inventory_item_price >> nth=0')
        await expect(priceSauceLabsOnesieProduct).toHaveText('$7.99')
        const removeSauceLabsOnesieProduct = this.page.locator('#remove-sauce-labs-onesie')
        await expect(removeSauceLabsOnesieProduct).toHaveText('Remove')

        const labelSauceLabsBoltTShirtProduct = this.page.locator('#item_1_title_link')
        await expect(labelSauceLabsBoltTShirtProduct).toHaveText('Sauce Labs Bolt T-Shirt')
        const priceSauceLabsBoltTShirtProduct = this.page.locator('.inventory_item_price >> nth=1')
        await expect(priceSauceLabsBoltTShirtProduct).toHaveText('$15.99')
        const removeSauceLabsBoltTShirtProduct = this.page.locator('#remove-sauce-labs-bolt-t-shirt')
        await expect(removeSauceLabsBoltTShirtProduct).toHaveText('Remove')

        const continueShoppingButtonIsVisible = this.page.locator('#continue-shopping')
        await expect(continueShoppingButtonIsVisible).toBeVisible()

        const checkoutButtonIsVisible = this.page.locator('#checkout')
        await expect(checkoutButtonIsVisible).toBeVisible()
    }

    async redirectToCheckoutStepOnePage() {
        await this.page.click('#checkout')
        const titleVisible = this.page.locator('.title')
        await expect(titleVisible).toHaveText('Checkout: Your Information')
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
    }

}