import {Given, Then, When,} from "@badeball/cypress-cucumber-preprocessor";
import {LoginPage} from "../../pages/loginPage";
import {homePageInstance, loginPage} from "../../pages";

  Given('A user navigates url page', () =>{
      homePageInstance.navigateUrl()
  })
  When('I click the sign up link', () =>{
    homePageInstance.clickSignup()
  })
  When('I enter my name', () =>{
    loginPage.typeSignupEmail()
  })
  When('I enter my email', () => {
    loginPage.typeSignupEmail()
  })
  When('I click the sign up button', () => {
    loginPage.clickSigninButton()
 })
 Then('I should see the "New User Signup!"page', () => {
   loginPage.verifyNewUserVisible()
 })
 When('I see the "Enter Account Information" section',() =>{
   loginPage.verifyAccountInformationIsVisible()
 })
 When('I select my gender as "Male"',()=>{
  loginPage.checkGender()
 })
 When('I type my name', () =>{
     loginPage.typeName()
 })
 When('I type my email',()=>{
     loginPage.typeEmail()
 })
 When('I enter my password',()=>{
    loginPage.typePassword()
 })
 When('I enter my date of birth',()=>{
     loginPage.typeRandomDayOfBirth(),loginPage.typeMonthOfBirth('march'),loginPage.typeRandomYearOfBirth()
 })
 When('I opt in for newsletters',()=>{
     loginPage.checkNewsletters()
 })
 When('I opt in for offers',()=>{
     loginPage.checkOffers()
 })
 When('I enter my first name',()=>{
     loginPage.typeFirstName()
 })
 When('I enter my last name',()=>{
     loginPage.typeLastName()
 })
  When('I enter my company name',()=>{
      loginPage.typeCompanyName()
  })
 When('I enter my address1',()=>{
     loginPage.typeAddress1()
 })
 When('I enter my address2',()=>{
     loginPage.typeAddress2()
 })
 When('I select my country as "United States"',()=>{
     loginPage.typeCountry('United States')
 })
 When('I select my state',()=>{
     loginPage.typeState()
 })
 When('I enter my city',()=>{
     loginPage.typeCity()
 })
 When('I enter my zip code',()=>{
     loginPage.typeZipCode()
 })
  When('I enter my mobile number',()=>{
      loginPage.typeMobileNumber()
  })
  When('I click the create account button',()=>{
      loginPage.clickCreateAccountButton()
  })
  When('I should see the "Account Created!" section',()=>{
      loginPage.verifyAccountCreatedIsVisible()
  })
  When('I click the delete account button',()=>{
      loginPage.clickDeleteAccount()
  })
  Then('I should see the "Account Deleted!" section',()=>{
      loginPage.verifyAccountDeletedIsVisible()
  })
  When('I click the continue button',()=>{
      loginPage.clickContinueButton()
  })
