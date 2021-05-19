import { DLSCalculatorPage } from "../page-objects/dls-calculator-page";
import { DLSResultListPage } from "../page-objects/dls-resultlist-page";

const dLSCalculatorPage = new DLSCalculatorPage();
const dLSResultListPage = new DLSResultListPage();
var totalAvailableTraffics = [];

describe('User story A – DSL Tariffs > Scenario 2: Load multiple tariff result pages', function () {
    it('Load multiple tariff result pages', function () {
        dLSCalculatorPage.navigateToDlsCalculatorPage();
        dLSCalculatorPage.verifyDlsCalculatorPage();
        dLSCalculatorPage.areaCodeTextField().click().type(Cypress.env("zipCode"));
        dLSCalculatorPage.speedSelect().should('contain', Cypress.env("internetSpeed")).click();
        dLSCalculatorPage.submitBtn().should('include.text', Cypress.env("submitBtnTxt")).click();
        dLSResultListPage.verifyDLSResultPage();
        dLSResultListPage.totalAvailableTraffics().then(function ($totalAvailableNetworkTraffic) {
            totalAvailableTraffics = $totalAvailableNetworkTraffic.text().split(" ");
            dLSResultListPage.networkproviderList().should('have.length', 20);
            dLSResultListPage.loadMoreTrafficBtn().click();
            dLSResultListPage.networkproviderList().should('have.length', 40);
            dLSResultListPage.loadMoreTrafficBtn().click();
            dLSResultListPage.networkproviderList().should('have.length', 60);
            dLSResultListPage.loadMoreTrafficBtn().then(function ($remainingTrafficCount) {
                var remainingTrafficCount = $remainingTrafficCount.text().split(" ");
                //check for - Verify that the final weitere Tarife laden button displays the expected number of tariffs remaining
                if (remainingTrafficCount[1] == (totalAvailableTraffics[0] - 60)) {
                    dLSResultListPage.loadMoreTrafficBtn().click();
                    //check for - the weitere Tarife laden button is no longer displayed when all the tariffs are visible
                    dLSResultListPage.loadMoreBtnNotDisplayedAfterLoadingTraffic();
                }
            });
            //check for - the total number of tariffs displayed matches the total listed in the Ermittelte Tarife section
            dLSResultListPage.networkproviderList().should('have.length', totalAvailableTraffics[0]);
        });
    });
});