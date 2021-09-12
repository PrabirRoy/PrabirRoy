import { Given,When,Then , And} from "cypress-cucumber-preprocessor/steps";
import login from "..login/../../support/pageobjects/login";
import projectcreation from "../../../support/pageobjects/projectcreation";

const loginPage = new login()
const projectcreationPage = new projectcreation()

And ('user clicks on project tab', function(){
 projectcreationPage.getProjecttab().click()

})

When ('user clicks on New Project button', function(){
projectcreationPage.getNewProjectButton().click()

})

And ('user populates all the fieds', function(){
projectcreationPage.getName().type("Test Data-5")
projectcreationPage.getDescription().type("Lorem Ipsum Doler Sit Amet")


})
And ('user click on Add button', function(){
projectcreationPage.getAddButton().click()

})

Then ('New Projects is created successfully', function(){
    projectcreationPage.getData().click()

})
