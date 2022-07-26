import { test } from '@playwright/test'

import { LoginPage } from '../pages/login-page'

let loginPage: LoginPage

test.beforeEach(async ({page})=> {
    loginPage = new LoginPage(page)
})

test('Login successfully', async ({ page }) => {
    await loginPage.go()
    await loginPage.sigIn('standard_user', 'secret_sauce')
    await loginPage.userLoggedIn()
})