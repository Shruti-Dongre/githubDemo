import data from "../testData/loginData.json"

export default class GeneralUtilities{
    constructor(page){
        this.page=page
    }

    async navigate(){
        await this.page.goto(data.navigationLink.url)
    }

    async clickOnElement(element){
        await element.click()
    }

    async fillTextbox(element, text){
        await element.fill(text)
    }


}