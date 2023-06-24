import {homePageInstance, loginPage} from "../pages";
import {faker} from "..//pages"

describe('Register User',()=>{
    it('should register a new user',()=>{
        homePageInstance.navigateUrl()
        homePageInstance.verifyHomePageIsVisible()
        homePageInstance.clickSignup()
        loginPage.verifyNewUserVisible()
        loginPage.typeSignupName()
        loginPage.typeSignupEmail()
        loginPage.clickSigninButton()
        loginPage.verifyAccountInformationIsVisible()
        loginPage.checkGender()
        loginPage.typeName();
        loginPage.typePassword()
        loginPage.typeRandomDayOfBirth()
        loginPage.typeMonthOfBirth('March')
        loginPage.typeRandomDayOfBirth();
        loginPage.checkNewsletters()
        loginPage.checkOffers()
        loginPage.typeFirstName()
        loginPage.typeLastName()
        loginPage.typeCompanyName()
        loginPage.typeAddress1()
        loginPage.typeAddress2()
        loginPage.typeCountry('United States')
        loginPage.typeState()
        loginPage.typeCity()
        loginPage.typeZipCode()
        loginPage.typeMobileNumber()
        loginPage.clickCreateAccountButton()
        loginPage.verifyAccountCreatedIsVisible()
        loginPage.clickContinueButton()
        loginPage.clickDeleteAccount()
        loginPage.verifyAccountDeletedIsVisible()
        loginPage.clickContinue()


    })
})