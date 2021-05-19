import { DLSCalculatorPage } from "../page-objects/dls-calculator-page";
import { DLSResultListPage } from "../page-objects/dls-resultlist-page";

const dLSCalculatorPage = new DLSCalculatorPage();
const dLSResultListPage = new DLSResultListPage();

describe('User story A – DSL Tariffs > Scenario 1: Verify the DSL calculator', function () {
    it('Verify the DSL calculator', function () {
        dLSCalculatorPage.navigateToDlsCalculatorPage();
        dLSCalculatorPage.verifyDlsCalculatorPage();
        dLSCalculatorPage.areaCodeTextField().click().type(Cypress.env("zipCode"));
        dLSCalculatorPage.speedSelect().should('contain', Cypress.env("internetSpeed")).click();
        dLSCalculatorPage.submitBtn().should('include.text', Cypress.env("submitBtnTxt")).click();
        dLSResultListPage.verifyDLSResultPage();
        //check for - atleast 5 internet tariffs are displayed
        dLSResultListPage.networkproviderList().should('have.length.above', 5);
        dLSResultListPage.networkSpeedCheck().then(function ($networkSpeed) {
            const networkSpeed = $networkSpeed.text().split(" ");
            //check for - the displayed tariffs provide at least 100 Mbit/s download speed
            for (var i = 0; i < networkSpeed.length; i++) {
                if (networkSpeed[i] >= 100) {
                    cy.log(Cypress.env("internetSpeedTxt"));
                }
            }
        });
    });
});