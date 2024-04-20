import { BasePage } from "../pageObjects/BasePage";

export class DeliveryMethodPage extends BasePage {
    static get url(){
        return "/#/delivery-method";
    }

    static get deliveryMethod(){
        return cy.get('[class="mat-row cdk-row ng-star-inserted"]');
    }

    static get continueButton(){
        return cy.get(".nextButton");
    }
}