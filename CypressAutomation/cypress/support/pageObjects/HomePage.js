class HomePage
{


    getEditBox(){


        return cy.get("input[name='name']:nth-child(2)")


    }

    getTwoWayDataBinding(){

        return cy.get(".ng-untouched.ng-pristine.ng-valid")




    }

    getGender(){


        return cy.get("#exampleFormControlSelect1")



    }

    getEnterpreneaur()
    {


        return cy.get("#inlineRadio3")


    }

    getShopTab()
    {


        return cy.contains("Shop")


    }



   

}

export default HomePage;