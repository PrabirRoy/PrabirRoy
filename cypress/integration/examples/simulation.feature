Feature: simulation creation

Scenario: Verify that user is able to create simulation

Given User click on the url
And user logged in successfully
And user creates the project successfully
When user click on New Simulation button
And populates description
And click on Next buttton
Then Simulation get created successfully