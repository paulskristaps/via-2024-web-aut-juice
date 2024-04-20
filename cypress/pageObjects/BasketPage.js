import { BasePage } from "../pageObjects/BasePage";

export class BasketPage extends BasePage {
    static get url(){
        return "/#/basket";
    }

    static get checkoutButton(){
        return cy.get("#checkoutButton");
    }
}