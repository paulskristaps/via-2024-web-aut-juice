import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { EveryPage } from "../pageObjects/EveryPage";
import { BasketPage } from "../pageObjects/BasketPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";


describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click the "Account" button
      HomePage.accountBtn.click();

      // Click the "Login" button
      HomePage.loginBtn.click();
    
      // Set email value to "demo"
      LoginPage.emailTxtField.type("demo");

      // Set password value to "demo"
      LoginPage.passwordField.type("demo");

      // Click Log in
      LoginPage.logInBtn.click();

      // Click Account button
      HomePage.accountBtn.click();

      // Validate that "demo" account name appears in the menu section
      HomePage.accountPage.contains('demo');

    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountBtn.click();

      // Login button
      HomePage.logInBtn.click();

      // Click "Not yet a customer?"
      LoginPage.registerBtn.click();

      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      // Generate a random number between 1000 and 9999

      const randomNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      const email = "email_" +  randomNumber + "@gmail.com";
      const password = "Password123";
      RegistrationPage.emailTxtField.type(email);
      
      // Fill in password field and repeat password field with same password
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);

      // Click on Security Question menu
      RegistrationPage.securityMenu.click();

      // Select  "Name of your favorite pet?"
      RegistrationPage.securityOption.click();

       // Fill in answer
       RegistrationPage.securityAnswer.type('Yellow Cats');

       // Click Register button
       RegistrationPage.registerBtn.click();

       // Set email value to previously created email
       LoginPage.emailTxtField.type(email);

       // Set password value to previously used password value
       LoginPage.passwordField.type(password);

       // Click login button
       LoginPage.logInBtn.click();

       // Click Account button
       HomePage.accountBtn.click();

       // Validate that account name (with previously created email address) appears in the menu section
       HomePage.accountPage.contains(email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      
      // Click on search icon
      HomePage.searchBtn.click();

      // Search for Lemon
      HomePage.searchField.type('Lemon{enter}');

      // Select a product card - Lemon Juice (500ml)
      HomePage.findItem.contains("Lemon Juice (500ml)").click();

      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.itemInfo.contains("Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search and validate lemon with multiple cards ", () => {
      
      // Click on search icon
      HomePage.searchBtn.click();
      // Search for Lemon
      HomePage.searchField.type('500ml{enter}');
      // Select a product card - Lemon Juice (500ml)
      HomePage.findItem.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.itemInfo.contains("Sour, but full of vitamins!")
    });

    it("Search 500ml and validate multiple cards", () => {
      // Click on search icon
      HomePage.searchBtn.click();

      // Search for 500ml
      HomePage.searchField.type('500ml{enter}');

      // Select a product card - Eggfruit Juice (500ml)
      HomePage.findItem.contains("Eggfruit Juice (500ml)").click();

      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.itemInfo.contains("Now with even more exotic flavour.");
      // Close the card
      HomePage.closeButton.click();
       // Select a product card - Lemon Juice (500ml)
      HomePage.findItem.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.itemInfo.contains("Sour but full of vitamins.");
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.findItem.contains("Strawberry Juice (500ml)").click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.itemInfo.contains("Sweet & tasty!");
    });


    //create a scenario - read a review
    it("Read a review", () => {
      // Click on search icon
      HomePage.searchBtn.click();

      // Search for King
      HomePage.searchField.type("King");

      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.findItem.contains('OWASP Juice Shop "King of the Hill" Facemask').click();

      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.expandButton.click();
      cy.wait(250);

      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.checkText.should('contain.text', 'K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!');
    });

    // Create scenario - Add a review
    it("Add a review", () => {
       // Click on search icon
       HomePage.searchBtn.click();

       // Search for Raspberry
       HomePage.searchField.type("Raspberry{enter}");
 
       // Select a product card - Raspberry Juice (1000ml)
       HomePage.findItem('Raspberry Juice (1000ml)').click();
       cy.wait(250);
 
       // Type in review - "Tastes like metal"
       HomePage.reviewTextField.type('Tastes like metal');
 
       // Click Submit
       HomePage.reviewSubmitButton.click();
 
       // Click expand reviews button/icon (wait for reviews to appear)
       HomePage.expandButton.click();
       cy.wait(250);
       
       // Validate review -  "Tastes like metal"
       HomePage.checkText.should('contain.text', 'Tastes like metal');
    });

    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
      // Validate that the default amount of cards is 12
      HomePage.itemsPerPage.should('contain.text', 12);
      HomePage.productInfo.should('have.length', 12);

      // Change items per page (at the bottom of page) to 24
      HomePage.itemsPerPage.click();
      HomePage.pageItem.contains('24').click();

      // Validate that the amount of cards is 24
      HomePage.itemsPerPage.should('contain.text', 24);
      HomePage.productInfo.should('have.length', 24);

      // Change items per page (at the bottom of page) to 36
      HomePage.itemsPerPage.click();
      HomePage.pageItem.contains('36').click();
      
      // Validate that the amount of cards is 35
      HomePage.productInfo.should('have.length', 35);
    });

    // Create scenario - Buy Girlie T-shirt
    it(" Buy Girlie T-shirt", () => {
      // Click on search icon
      HomePage.searchBtn.click();
      
      // Search for Girlie
      HomePage.searchField.type("Girlie{enter}");

      // Add to basket "Girlie"
      HomePage.addToBasketBtn('Girlie').click();

      // Click on "Your Basket" button
      HomePage.basketBtn.click();

      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkoutButton.click();


      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.addressField.contains("United Fakedom").click();

      // Click Continue button
      SelectAddressPage.continueButton.click();

      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.deliveryMethod.contains('Standard Delivery').click();

      // Click Continue button
      DeliveryMethodPage.continueButton.click();

      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.selectCard('5678').click();

      // Click Continue button
      PaymentOptionsPage.continueButton.click();

      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.placeOrderButton.click()

      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.orderCompletion.should('contain.text', 'Thank you for your purchase!');
    });

    // Create scenario - Add address
    it("Add adress", () => {

      // Click on Account
      HomePage.accountButton.click();

      // Click on Orders & Payment
      HomePage.accountMenu.eq(1).click();
      
      // Click on My saved addresses
      HomePage.ordersAndPaymentMenu.eq(2).click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.newAddressButton.click();

      // Create page object - CreateAddressPage
      // Fill in the necessary information
      const country = 'UK';
      const name = 'Pauls Berzins';
      const phoneNr = '392389501';
      const zipCode = '3493';
      const address = 'Something something street 21';
      const city = 'Whatever';
      const state = 'Whaetver 2';

      CreateAddressPage.formFields.eq(0).type(country);
      CreateAddressPage.formFields.eq(1).type(name);
      CreateAddressPage.formFields.eq(2).type(phoneNr);
      CreateAddressPage.formFields.eq(3).type(zipCode);
      CreateAddressPage.formFields.eq(4).type(address);
      CreateAddressPage.formFields.eq(5).type(city);
      CreateAddressPage.formFields.eq(6).type(state);

      // Click Submit button
      CreateAddressPage.submitButton.click();

      // Validate that previously added address is visible
      SavedAddressesPage.address.should('contains.text', `${address}, ${city}, ${state}, ${zipCode}`);
      SavedAddressesPage.country.should('contains.text', country);
      SavedAddressesPage.name.should('contains.text',name);
    });

    // Create scenario - Add payment option
    it.only("Add payment", () => {
      // Click on Account
      HomePage.accountBtn.click();

      // Click on Orders & Payment
      HomePage.accountPage.click();

      // Click on My payment options
      HomePage.paymentOptionBtn.click();

      
    });
  });
});