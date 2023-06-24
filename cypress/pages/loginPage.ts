import {faker} from "@faker-js/faker";

export class LoginPage {
    elements = {
        signupNameInput: () => cy.get('input[data-qa="signup-name"]'),
        signupEmailInput: () => cy.get('input[data-qa="signup-email"]'),
        signinButton: () => cy.get('button[data-qa="signup-button"]'),
        newUserVisible: () => cy.get('h2').contains('New User Signup!'),
        accountInformationVisible: () =>  cy.get('b').contains('Enter Account Information'),
        pickGender: () =>  cy.get('input[type="radio"][name="title"][id="id_gender1"][value="Mr"]'),
        nameInput: () =>  cy.get('#name'),
        emailInput: () => cy.get('#email'),
        inputPassword: () =>   cy.get('#password'),
        inputDayOfBirth: () => cy.get('#days'),
        inputMonthOfBirth: () => cy.get('#months'),
        inputYearOfBirth: () => cy.get('#years'),
        newsletters: () =>  cy.get('#newsletter'),
        offers:() =>   cy.get('#optin'),
        firstNameInput:() => cy.get('#first_name'),
        lastNameInput:() =>  cy.get('#last_name'),
        inputCompanyName:() => cy.get('#company'),
        address1Input:() =>  cy.get('#address1'),
        inputAddress2:() =>  cy.get('#address2'),
        inputCountry: () => cy.get('#country'),
        inputState: () => cy.get('#state'),
        inputCity: () =>  cy.get('#city'),
        inputZipCode: () =>  cy.get('#zipcode'),
        inputMobileNumber: () => cy.get('#mobile_number'),
        createAccountButton: () =>  cy.get('button[data-qa="create-account"]'),
        accountCreatedVisible: () => cy.get('b').contains('Account Created!'),
        continueButton: () => cy.get('a[data-qa="continue-button"]'),
        loggedInAsUsernameShouldBeVisible: () => cy.get('a:contains("Logged in as ik")'),
        deleteAccount: () => cy.get('a:contains("Delete Account")'),
        accountDeletedShouldBeVisible: () => cy.get('b:contains("Account Deleted!")'),
        continue: () => cy.get('a[data-qa="continue-button"]')



    }


    typeSignupName() {
     const fName = faker.name.firstName()
        this.elements.signupNameInput().type(fName);
    }
    typeSignupEmail(){
        const email = faker.internet.email();
    this.elements.signupEmailInput().type(email)
    }
    clickSigninButton(){
        this.elements.signinButton().click()
    }
    verifyNewUserVisible(){
        this.elements.newUserVisible().should('be.visible')
    }
    verifyAccountInformationIsVisible(){
        this.elements.accountInformationVisible().should('be.visible')
    }
    checkGender(){
        this.elements.pickGender().check()
    }
    typeName(){
        const fName = faker.name.firstName();
        this.elements.nameInput().type(fName)
    }
    typeEmail(){
        const email = faker.internet.email()
        this.elements.emailInput().type(email)
    }
    typePassword(){
        const password = faker.internet.password()
        this.elements.inputPassword().type(password)
    }
    typeDayOfBirth(inputDayOfBirth: string){
        this.elements.inputDayOfBirth().type(inputDayOfBirth)
    }

    typeRandomDayOfBirth() {
        const randomDayOfBirth = faker.datatype.number({ min: 1, max: 31 }).toString();
        this.typeDayOfBirth(randomDayOfBirth);
    }
    typeMonthOfBirth(inputMonthOfBirth: string){
        this.elements.inputMonthOfBirth().type(inputMonthOfBirth)
    }
    typeYearOfBirth(inputYearOfBirth: string){
        this.elements.inputYearOfBirth().type(inputYearOfBirth)
    }
    typeRandomYearOfBirth(){
        const randomYearOfBirth = faker.datatype.number({min: 1800,max: 2023}).toString();
        this.typeYearOfBirth(randomYearOfBirth)
    }
    checkNewsletters(){
        this.elements.newsletters().check()
    }
    checkOffers(){
        this.elements.offers().check()
    }
    typeFirstName(){
        const fName = faker.name.firstName()
        this.elements.firstNameInput().type(fName)
    }
    typeLastName(){
        const lName =faker.name.lastName()
        this.elements.lastNameInput().type(lName)
    }
    typeCompanyName() {
        const name = faker.company.name();
        this.elements.inputCompanyName().type(name);
    }
    typeAddress1(){
        const address = faker.address.streetAddress();
        this.elements.address1Input().type(address)
    }
    typeAddress2(){
        const address = faker.address.streetAddress()
        this.elements.inputAddress2().type(address)
    }
    typeCountry(inputCountry: string){
        this.elements.inputCountry().select(inputCountry)
    }
    typeState(){
        const state = faker.address.state();
        this.elements.inputState().type(state)
    }
    typeCity(){
        const city = faker.address.city()
        this.elements.inputCity().type(city)
    }
    typeZipCode(){
        const zipCode = faker.address.zipCodeByState();
        this.elements.inputZipCode().type(zipCode);
    }
    typeMobileNumber(){
        const mobileNumber = faker.phone.number();
        this.elements.inputMobileNumber().type(mobileNumber)
    }
    clickCreateAccountButton(){
        this.elements.createAccountButton().click()
    }
    verifyAccountCreatedIsVisible(){
        this.elements.accountCreatedVisible().should('be.visible')
    }
    clickContinueButton(){
        this.elements.continueButton().click()
    }
    verifyLoggedInWithUsernameIsVisble(){
        this.elements.loggedInAsUsernameShouldBeVisible().should('be.visible')
    }
    clickDeleteAccount(){
        this.elements.deleteAccount().click()
    }
    verifyAccountDeletedIsVisible(){
        this.elements.accountDeletedShouldBeVisible().should('be.visible')
    }
    clickContinue(){
        this.elements.continue().click()
    }










}




















