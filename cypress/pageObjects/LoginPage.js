import { BasePage } from "../pageObjects/BasePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get elementName() {
    return cy.get("[class='mat-button-wrapper']");
  }
  
  static get emailTxtField(){
    return cy.get('#email');
  }

  static get passwordField(){
    return cy.get('#password');
  }

  static get logInBtn(){
    return cy.get('#loginButton');
  }

  static get registerBtn(){
    return cy.get('[href="#/register"]');
  }
}