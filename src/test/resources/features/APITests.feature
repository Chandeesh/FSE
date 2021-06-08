@AcceptanceTestAPI
Feature: Test all th APIs of the Beehive Application

	@API_Happy_Path
  Scenario Outline: Verify Successful Authentication and Login upon valid credentials
    Given a beehive api
    When the api is authenticated using "chandeesh.babu@gmail.com" and "123"
    Then Authentication should be successful
    When the user calls the login API using JWT
    Then login response should be success

    Examples: 
      | TestCase          | 
      | Valid Credentials |