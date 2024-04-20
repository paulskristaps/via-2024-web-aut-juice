import { BasePage } from "../pageObjects/BasePage";

export class RegistrationPage extends BasePage {
    static get url() {
      return "/#/register";
    }

    static get registerBtn(){
        return cy.get('#registerButton');
    }

    static get emailTxtField(){
        return cy.get('#emailControl');
    }

    static get passwordField(){
        return cy.get('#passwordControl');
    }

    static get repeatPasswordField(){
        return cy.get('#repeatPasswordControl');
    }

    static get securityMenu(){
        return cy.get('mat-select[aria-label="Selection list for the security question"]');
    }

    static get securityOption(){
        return cy.contains('mat-option', 'Name of your favorite pet?');
    }
}