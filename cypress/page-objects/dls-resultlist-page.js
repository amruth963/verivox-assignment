export class DLSResultListPage {

    verifyDLSResultPage() {
        return cy.url().should('include', '/internet/vergleich/#/?phonePrefix=030&minSpeed=100000');
    }

    networkproviderList() {
        return cy.get('[class="row my-4 ng-star-inserted"]');
    }

    networkSpeedCheck() {
        return this.networkproviderList().find('app-tariff-speed').find('[class="d-flex internet-speed internet-speed-download"]').find('.pl-2');
    }

    totalAvailableTraffics() {
        return cy.get("h2[class='summary-tariff']").scrollIntoView().should('be.visible');
    }

    loadMoreTrafficBtn(){
        return cy.get("button[class='btn btn-primary text-uppercase ng-star-inserted']").scrollIntoView().should('be.visible');
    }

    loadMoreBtnNotDisplayedAfterLoadingTraffic(){
        return cy.get('[class="col-12 text-center"]').should('not.have.class', "[class='btn btn-primary text-uppercase ng-star-inserted']");
    }   

    remainingTrafficCount(){
        this.loadMoreTrafficBtn().then(function($remainingTrafficCount){
            var remainingTrafficCount = $remainingTrafficCount.text().split(" ");
            console.log(remainingTrafficCount[1]);
            return remainingTrafficCount[1];
        });

    }
}