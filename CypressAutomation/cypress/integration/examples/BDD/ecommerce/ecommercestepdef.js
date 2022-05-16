/// <reference types="cypress" />
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'
Given('I open ecommerce page', function () {

    cy.visit(Cypress.env('url')+"/angularpractice/");
    
  });

When('I add item to cart', function () {

    
    
  });

Then('select the country and verify thank you', function () {
    
  });

And('Validate the total price', function () {
    
  });