export class DLSCalculatorPage {

    navigateToDlsCalculatorPage(){
        cy.visit('https://www.verivox.de/');
    }

    verifyDlsCalculatorPage() {
        cy.url().should('include', 'verivox.de');
        cy.clearCookies();
        cy.clearLocalStorage();
    }

    acceptCookieSettingsBtn(){
        cy.window().then(function(){
            cy.get('#uc-btn-accept-banner').click();
        });
    }

    areaCodeTextField(){
       return cy.get('[name=phonePrefix]').should('be.visible');
    }

    speedSelect(){
        return cy.get('[id$="calc-dsl-option-3"]');
    }

    submitBtn(){
        return cy.get('.page-default-signup').first().find('button');
    }
}
