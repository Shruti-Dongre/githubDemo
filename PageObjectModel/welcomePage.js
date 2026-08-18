import data from "../testData/loginData.json"
import GeneralUtilities from "../utility/generalUtility"

export default class welcomePage{
    constructor(page){
        this.page=page
        this.generalUtilities=new GeneralUtilities(page)
        this.registrationLink=page.getByRole("link", {name:"Registration"})
    }

    async navigateToHomePage(){
        await this.generalUtilities.navigate()
    }

    async clickOnRegister(){
        await this.generalUtilities.clickOnElement(this.registrationLink)
    }
}