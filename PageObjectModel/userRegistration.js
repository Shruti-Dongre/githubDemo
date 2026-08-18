import data from "../testData/loginData.json"
import GeneralUtilities from "../utility/generalUtility"

export default class UserRegistration{
    constructor(page){
        this.page=page
        this.generalUtilities=new GeneralUtilities(page)
        this.gender=page.locator("//input[@id='gender-female']");
        this.firstName=page.locator("//input[@id='FirstName']")
        this.lastName=page.locator("//input[@id='LastName']")
        this.email=page.locator("//input[@id='Email']")
        this.password=page.locator("//input[@id='Password']")
        this.confirmPassword=page.locator("//input[@id='ConfirmPassword']")
        this.register=page.locator("//input[@id='register-button']")
    }

    async clickOnGender(){
        await this.generalUtilities.clickOnElement(this.gender)
    }

    async enterFirstName(){
        await this.generalUtilities.fillTextbox(this.firstName, data.userData.firstName)
    }

    async enterLastName(){
        await this.generalUtilities.fillTextbox(this.lastName, data.userData.lastName)
    }

    async enterEmail(){
        await this.generalUtilities.fillTextbox(this.email, data.userData.email)
    }

    async enterPassword(){
        await this.generalUtilities.fillTextbox(this.password, data.userData.password)
    }

    async enterConfirmPassword(){
        await this.generalUtilities.fillTextbox(this.confirmPassword, data.userData.confirmPassword)
    }

    async clickRegister(){
        await this.generalUtilities.clickOnElement(this.register)
    }
}