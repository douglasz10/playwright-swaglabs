import { test } from '@playwright/test'

import { LoginPage } from '../pages/login-page'
import { InventoryPage } from '../pages/inventory-page'

let loginPage: LoginPage
let inventoryPage: InventoryPage

test.beforeEach(async ({page})=> {
    loginPage = new LoginPage(page)
    inventoryPage = new InventoryPage(page)
})

test('Add two different products to cart', async ({ page }) => {
    await loginPage.go()
    await loginPage.sigIn('standard_user', 'secret_sauce')
    await loginPage.userLoggedIn()
    await inventoryPage.orderByPriceLowToHigh()
    await inventoryPage.addProductsToCart()
    await inventoryPage.numberProductsAddToCart()
})