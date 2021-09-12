Feature:  Project Creation

Scenario: Verify that user is able to click on new project

Given User click on the url
And user logged in successfully
And user clicks on project tab
When user clicks on New Project button
And user populates all the fieds
And user click on Add button
Then New Projects is created successfully