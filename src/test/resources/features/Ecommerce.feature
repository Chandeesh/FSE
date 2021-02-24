@AcceptanceTest
Feature: Test all the features of the Ecommerce application

  @LoginUserSuccess
  Scenario Outline: Verify the login response upon the given inputs
    Given a Ecommerce website
    When the user logins with "<username>" and "<password>"
    Then login should be successful

    Examples: 
      | Test Case         | username              | password |
      | Valid Credentials | chandeesh64@yahoo.com |      123 |

  @LoginUserFailure
  Scenario Outline: Verify the login response upon the given inputs
    Given a Ecommerce website
    When the user logins with "<username>" and "<password>"
    Then login should be failed

    Examples: 
      | Test Case             | username | password |
      | Incorrect Credentials | asd      | dasdsad  |
