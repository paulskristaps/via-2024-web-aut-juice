import { BasePage } from "../pageObjects/BasePage";

export class OrderSummaryPage extends BasePage {
    static get url(){
        return "/#/order-summary";
    }

    static get placeOrderButton(){
        return cy.get("#checkoutButton");
    }

}