import { BasePage } from "../pageObjects/BasePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountBtn(){
    return cy.get('#navbarAccount');
  }

  static get loginBtn(){
    return cy.get('#navbarLoginButton');
  }

  static get accountPage(){
    return cy.get('[aria-label="Go to user profile"]');
  }

  static get searchBtn(){
    cy.get('#searchQuery');
  }

  static get searchField(){
    return cy.get('#mat-input-0');
  }

  static get findItem(){
    return cy.get('[class="item-name"]');
  }

  static get itemInfo(){
    return cy.get('app-product-details');
  }

  static get closeButton() {
    return cy.get('[class="mat-focus-indicator close-dialog buttons mat-stroked-button mat-button-base"]');
  }

  static get expandButton(){
    return cy.get('[aria-label="Expand for Reviews"]');
  }

  static get checkText(){
    return cy.get('[aria-label="Expand for Reviews"] .comment p');
  }

  static get reviewTextField(){
    return cy.get('[aria-label="Text field to review a product"]');
  }

  static get reviewSubmitButton(){
    return cy.get('#submitButton');
  }

  static get itemsPerPage(){
    return cy.get('.mat-select-value-text');
  }

  static get productInfo(){
    return cy.get('.mat-grid-tile-content');
  }

  static get pageItem(){
    return cy.get('.mat-option-text');
  }

  static addToBasketBtn(itemName){
    return this.itemInfo(itemName).get('.btn-basket');
  }

  static get basketBtn(){
    return cy.get("[aria-label='Show the shopping cart']");
  }

  static get paymentOptionBtn(){
    return cy.get('[aria-label="Go to saved payment methods page"]');
  }

}
