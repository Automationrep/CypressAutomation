/// <reference types="cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'
describe("Cypress Framework",function(){



    before(function(){


        cy.fixture('example.json').then(function(data){


            this.data=data





        })
    })



   

    it("My First Test case",function()
    
    
    {


        cy.visit(Cypress.env('url')+"/angularpractice/")
        const homePage = new HomePage();
        const productPage = new ProductPage();
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEnterpreneaur().should('be.disabled')
        Cypress.config('defaultCommandTimeout',8000)
        homePage.getShopTab().click()
        this.data.product.forEach(function(element){



            cy.selectproduct(element)



        })
        productPage.checkout().click();

        






    })














});