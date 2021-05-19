export class DLSCalculatorPage {

    navigateToDlsCalculatorPage(){
        cy.visit('https://www.verivox.de/');
        cy.clearCookies();
        cy.clearLocalStorage();
    }

    verifyDlsCalculatorPage() {
        cy.url().should('include', 'verivox.de');
        cy.clearCookies();
        cy.clearLocalStorage();
    }

    areaCodeTextField(){
       return cy.get('[name=phonePrefix]').should('be.visible');
    }

    speedSelect(){
        return cy.get('[id$="calc-dsl-option-3"]');
        // return cy.get('[id="86cf1244-calc-dsl-option-3"]');
    }

    submitBtn(){
        return cy.get('.page-default-signup').first().find('button');
    }
}
