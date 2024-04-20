import { BasePage } from "../pageObjects/BasePage";

export class PaymentOptionsPage extends BasePage {
    static get url(){
        return "/#/payment/shop";
    }

    static get cards(){
        return cy.get('[class="mat-row cdk-row ng-star-inserted"]');
    }

    static selectCard(nums){
        return this.cards.contains(nums).parent('mat-row').find('.mat-radio-button');
    }

    static get continueButton(){
        return cy.get(".nextButton");
    }

    static get ordersAndPayments(){
        return cy.get(".mat-focus-indicator.mat-menu-trigger.mat-menu-item.mat-menu-item-submenu-trigger");
    }

    static get paymentOptions(){
        return cy.get("[aria-label='Go to saved payment methods page']");
    }
}