

export class HomePage {
    elements = {
        navigateUrl: () => cy.visit('www.automationexercise.com'),
        verifyHomePageIsVisible: () => cy.get('body'),
        productsLink: () => cy.get('a[href="/products"]'),
        signupLink: () => cy.get('a[href="/login"]'),
        cartLink: () => cy.get('a[href="/view_cart"]'),
        testCasesLink: () => cy.get('a[href="/test_cases"]'),
        contactUsLink: () => cy.get('a[href="/contact_us"]'),
    };
     navigateUrl() {
         this.elements.navigateUrl()
     }
    verifyHomePageIsVisible() {
        this.elements.verifyHomePageIsVisible().should('be.visible');
    }

    clickProducts() {
        this.elements.productsLink().click();
    }

    clickSignup() {
        this.elements.signupLink().click();
    }

    clickCart() {
        this.elements.cartLink().click();
    }

    clickTestCases() {
        this.elements.testCasesLink().click();
    }

    clickContactUs() {
        this.elements.contactUsLink().click();
    }
}














