import {test} from "@playwright/test"
import WelcomePage from "../PageObjectModel/welcomePage"
import UserRegistration from "../PageObjectModel/userRegistration"

test("demo web shop", async({page})=>{
    const welcomePage=new WelcomePage(page)
    const userRegistration= new UserRegistration(page)

    await welcomePage.navigateToHomePage()
    await welcomePage.clickOnRegister()

    await userRegistration.clickOnGender()
    await userRegistration.enterFirstName()
    await userRegistration.enterLastName()
    await userRegistration.enterEmail()
    await userRegistration.enterPassword()
    await userRegistration.enterConfirmPassword()
    await userRegistration.clickRegister()

    await page.pause()
})