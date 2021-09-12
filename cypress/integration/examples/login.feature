Feature: Login 

Scenario: Login with correct user name and password

Given User click on the url
When User provide the correct email
And User provides correct password
Then User should be able to navigate to home page of the application
