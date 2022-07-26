import { expect, Page } from '@playwright/test'


export class CheckoutCompletePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async viewCheckoutComplete() {
        const labelThankYouForYourOrder = this.page.locator('.complete-header')
        await expect(labelThankYouForYourOrder).toHaveText('THANK YOU FOR YOUR ORDER')

        const labelTextAboutYourOrder = this.page.locator('.complete-text')
        await expect(labelTextAboutYourOrder).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')

        const imgPonyExpress = this.page.locator('.pony_express')
        await expect(imgPonyExpress).toHaveAttribute('src', '/static/media/pony-express.46394a5d.png')

        const finishButtonIsVisible = this.page.locator('#back-to-products')
        await expect(finishButtonIsVisible).toBeVisible()
    }

}