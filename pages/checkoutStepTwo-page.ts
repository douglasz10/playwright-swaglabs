import { expect, Page } from '@playwright/test'


export class CheckoutStepTwoPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async viewProductsOnTheOverview() {
        const labelSauceLabsOnesieProduct = this.page.locator('#item_2_title_link')
        await expect(labelSauceLabsOnesieProduct).toHaveText('Sauce Labs Onesie')
        const priceSauceLabsOnesieProduct = this.page.locator('.inventory_item_price >> nth=0')
        await expect(priceSauceLabsOnesieProduct).toHaveText('$7.99')

        const labelSauceLabsBoltTShirtProduct = this.page.locator('#item_1_title_link')
        await expect(labelSauceLabsBoltTShirtProduct).toHaveText('Sauce Labs Bolt T-Shirt')
        const priceSauceLabsBoltTShirtProduct = this.page.locator('.inventory_item_price >> nth=1')
        await expect(priceSauceLabsBoltTShirtProduct).toHaveText('$15.99')

        const paymentInformation = this.page.locator('.summary_value_label >> nth=0')
        await expect(paymentInformation).toHaveText('SauceCard #31337')

        const shippingInformation = this.page.locator('.summary_value_label >> nth=1')
        await expect(shippingInformation).toHaveText('FREE PONY EXPRESS DELIVERY!')

        const itemTotal = this.page.locator('.summary_subtotal_label')
        await expect(itemTotal).toHaveText('Item total: $23.98')

        const tax = this.page.locator('.summary_tax_label')
        await expect(tax).toHaveText('Tax: $1.92')

        const total = this.page.locator('.summary_total_label')
        await expect(total).toHaveText('Total: $25.90')

        const finishButtonIsVisible = this.page.locator('#finish')
        await expect(finishButtonIsVisible).toBeVisible()
    }

    async redirectToCheckoutCompletePage() {
        await this.page.click('#finish')
        const titleVisible = this.page.locator('.title')
        await expect(titleVisible).toHaveText('Checkout: Complete!')
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
    }

}