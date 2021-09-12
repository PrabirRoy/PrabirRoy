import { Given,When,Then , And} from "cypress-cucumber-preprocessor/steps";
import login from "..login/../../support/pageobjects/login";

const loginPage = new login()


When('User provide the correct email', function(){
    loginPage.getEmail().type('prabirroy.et@gmail.com')
});


And('User provides correct password',  function(){
    loginPage.getPassword().type('Welcome@123')

});

Then ('User should be able to navigate to home page of the application', function(){
        loginPage.getSubmitbutton().click()

});