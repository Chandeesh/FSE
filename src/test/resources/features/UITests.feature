@AcceptanceTest
Feature: Test all the features of the Beehive Application

  @LoginUserSuccessUI
  Scenario Outline: Verify the login response upon the given inputs
    Given a beehive website
    When the user logins with "<username>" and "<password>"
    Then login should be successful

    Examples: 
      | Test Case         | username              | password |
      | Valid Credentials | chandeesh.babu@gmail.com |      123 |

  @LoginUserFailure
  Scenario Outline: Verify the login response upon the given inputs
    Given a beehive website
    When the user logins with "<username>" and "<password>"
    Then login should be failed

    Examples: 
      | Test Case             | username | password |
      | Incorrect Credentials | asd      | dasdsad  |
      
  @E2E
  Scenario Outline: Verify the display of plot upon valid inputs
    Given a beehive website
    When the user logins with "<username>" and "<password>"
    Then login should be successful
		When the user clicks on any options to view
		Then a visual plot should be displayed
		
    Examples: 
      | Test Case         | username              | password |
      | Valid Credentials | chandeesh.babu@gmail.com |      123 |