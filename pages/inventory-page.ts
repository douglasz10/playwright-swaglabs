import { expect, Page } from '@playwright/test'


export class InventoryPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async orderByPriceLowToHigh() {
        const labelOrderSearchProducts = this.page.locator('.active_option')
        await expect(labelOrderSearchProducts).toHaveText('Name (A to Z)')
        const orderSearchProductsCombo = this.page.locator('.product_sort_container')
        await this.page.click('.product_sort_container')
        orderSearchProductsCombo.selectOption({ label: 'Price (low to high)' })
    }

    async addProductsToCart() {
        const labelSauceLabsOnesieProduct = this.page.locator('#item_2_title_link')
        await expect(labelSauceLabsOnesieProduct).toHaveText('Sauce Labs Onesie')
        const priceSauceLabsOnesieProduct = this.page.locator('.inventory_item_price >> nth=0')
        await expect(priceSauceLabsOnesieProduct).toHaveText('$7.99')
        const imageSauceLabsOnesieProduct = this.page.locator('#item_2_img_link')
        await expect(imageSauceLabsOnesieProduct).toBeVisible()
        await this.page.click('#add-to-cart-sauce-labs-onesie')
        const removeSauceLabsOnesieProduct = this.page.locator('#remove-sauce-labs-onesie')
        await expect(removeSauceLabsOnesieProduct).toHaveText('Remove')

        const labelSauceLabsBoltTShirtProduct = this.page.locator('#item_1_title_link')
        await expect(labelSauceLabsBoltTShirtProduct).toHaveText('Sauce Labs Bolt T-Shirt')
        const priceSauceLabsBoltTShirtProduct = this.page.locator('.inventory_item_price >> nth=2')
        await expect(priceSauceLabsBoltTShirtProduct).toHaveText('$15.99')
        const imageSauceLabsBoltTShirtProduct = this.page.locator('#item_1_img_link')
        await expect(imageSauceLabsBoltTShirtProduct).toBeVisible()
        await this.page.click('#add-to-cart-sauce-labs-bolt-t-shirt')
        const removeSauceLabsBoltTShirtProduct = this.page.locator('#remove-sauce-labs-bolt-t-shirt')
        await expect(removeSauceLabsBoltTShirtProduct).toHaveText('Remove')
    }

    async numberProductsAddToCart() {
        const numberProductsToCart = this.page.locator('.shopping_cart_badge')
        await expect(numberProductsToCart).toHaveText('2')
    }

    async redirectToCartPage() {
        await this.page.click('.shopping_cart_link')
        const titleVisible = this.page.locator('.title')
        await expect(titleVisible).toHaveText('Your Cart')
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html')
    }

}