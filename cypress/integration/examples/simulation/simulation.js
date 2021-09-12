import { Given,When,Then , And} from "cypress-cucumber-preprocessor/steps";
import login from "..login/../../support/pageobjects/login";
import projectcreation from "../../../support/pageobjects/projectcreation";
import simulation from "../../../support/pageobjects/simulation";

const loginPage = new login()
const projectcreationPage = new projectcreation()
const simulationPage = new simulation()

And('user creates the project successfully', function (){
    projectcreationPage.getProjecttab().click()
    projectcreationPage.getNewProjectButton().click()
    projectcreationPage.getName().type("testing 12300")
    projectcreationPage.getDescription().type("Lorem Ipsum Doler Sit Amet") 
    projectcreationPage.getAddButton().click()
    cy.wait(5000)
    projectcreationPage.getData().click()

});

When ('user click on New Simulation button', function(){

    simulationPage.getNewSimulationbutton().click();
})

And ('populates description', function(){
    //simulationPage.getSimulationName().type("-test 1")
    simulationPage.getDescription().type("test-111")
})

And ('click on Next buttton', function(){
    simulationPage.getNextButton().click();
})

Then ('Simulation get created successfully', function(){
    simulationPage.getDiamondButton().click()
    simulationPage.getSaveButton().click()
    projectcreationPage.getProjecttab().click()
    projectcreationPage.getData().click()
    simulationPage.getExpand().click()
})