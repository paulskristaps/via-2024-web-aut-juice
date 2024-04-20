import { BasePage } from "../pageObjects/BasePage";

export class CreateAddressPage extends BasePage {
    static get url(){
        return "/#/address/create";
    }

    static get formFields(){
        return cy.get('#address-form>.mat-form-field');
    }

    static get submitButton(){
        return cy.get('#submitButton');
    }

}