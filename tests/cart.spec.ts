import { test } from '@playwright/test'

import { LoginPage } from '../pages/login-page'
import { InventoryPage } from '../pages/inventory-page'
import { CartPage } from '../pages/cart-page'

let loginPage: LoginPage
let inventoryPage: InventoryPage
let cartPage: CartPage

test.beforeEach(async ({page})=> {
    loginPage = new LoginPage(page)
    inventoryPage = new InventoryPage(page)
    cartPage = new CartPage(page)
})

test('Products with correct information in the cart', async ({ page }) => {
    await loginPage.go()
    await loginPage.sigIn('standard_user', 'secret_sauce')
    await loginPage.userLoggedIn()
    await inventoryPage.orderByPriceLowToHigh()
    await inventoryPage.addProductsToCart()
    await inventoryPage.numberProductsAddToCart()
    await inventoryPage.redirectToCartPage()
    await cartPage.viewProductsOnTheCartPage()
})