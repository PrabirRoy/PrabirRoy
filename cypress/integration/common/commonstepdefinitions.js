import { Given,When,Then , And} from "cypress-cucumber-preprocessor/steps";
import login from "./../../support/pageobjects/login";
import projectcreation from "./../../support/pageobjects/projectcreation";

const loginPage = new login()
const projectcreationPage = new projectcreation()


Given("User click on the url", function(){

cy.visit('https://www.d3a.io/projects ')
});


And("user logged in successfully", function(){
    loginPage.getEmail().type('prabirroy.et@gmail.com')
    loginPage.getPassword().type('Welcome@123')
    loginPage.getSubmitbutton().click()
    cy.wait(5000)


});
