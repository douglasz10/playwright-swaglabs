import { test } from '@playwright/test'

import { LoginPage } from '../pages/login-page'
import { InventoryPage } from '../pages/inventory-page'
import { CartPage } from '../pages/cart-page'
import { CheckoutStepOnePage } from '../pages/checkoutStepOne-page'
import { CheckoutStepTwoPage } from '../pages/checkoutStepTwo-page'
import { CheckoutCompletePage } from '../pages/checkoutComplete-page'

let loginPage: LoginPage
let inventoryPage: InventoryPage
let cartPage: CartPage
let checkoutStepOne: CheckoutStepOnePage
let checkoutStepTwo: CheckoutStepTwoPage
let checkoutComplete: CheckoutCompletePage

test.beforeEach(async ({page})=> {
    loginPage = new LoginPage(page)
    inventoryPage = new InventoryPage(page)
    cartPage = new CartPage(page)
    checkoutStepOne = new CheckoutStepOnePage(page)
    checkoutStepTwo = new CheckoutStepTwoPage(page)
    checkoutComplete = new CheckoutCompletePage(page)
})

test('Checkout Complete', async ({ page }) => {
    await loginPage.go()
    await loginPage.sigIn('standard_user', 'secret_sauce')
    await loginPage.userLoggedIn()
    await inventoryPage.orderByPriceLowToHigh()
    await inventoryPage.addProductsToCart()
    await inventoryPage.numberProductsAddToCart()
    await inventoryPage.redirectToCartPage()
    await cartPage.viewProductsOnTheCartPage()
    await cartPage.redirectToCheckoutStepOnePage()
    await checkoutStepOne.fillInYourInformation('Bruce', 'Lee', '130600150')
    await checkoutStepOne.redirectToCheckoutStepTwoPage()
    await checkoutStepTwo.viewProductsOnTheOverview()
    await checkoutStepTwo.redirectToCheckoutCompletePage()
    await checkoutComplete.viewCheckoutComplete()
})