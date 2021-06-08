package com.test.stepDefinition;

import com.webapplication.AuthenticationAPI;
import com.webapplication.ConfigUtils;
import com.webapplication.LoginAPI;
import com.webapplication.SetupHeaders;
import com.webapplication.WesiteTest;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;



public class StepDefinition {

	private WesiteTest test;
	private String url;
	private AuthenticationAPI authenticate = new AuthenticationAPI();
	private LoginAPI login = new LoginAPI();
	private String username;
	private String password;
	
	@Given("^a beehive website$")
	public void a_Ecommerce_website() throws Throwable {
		url = ConfigUtils.getValue("URL");
	}

	@When("^the user logins with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_user_logins_with_and(String email, String password) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		test.loginUser(url,email, password);
	}

	@Then("^login should be successful$")
	public void login_should_be_successful() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		test.successLoginUser();
	}
	
	@Then("^login should be failed$")
	public void login_should_be_failed() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		test.failureLogin();
	}

	@When("^the user clicks on any options to view$")
	public void the_user_clicks_on_any_options_to_view() throws Throwable {
	    test.clickWeight();
	}

	@Then("^a visual plot should be displayed$")
	public void a_visual_plot_should_be_displayed() throws Throwable {
	   test.assertPlot();
	}
	
	@Given("^a beehive api$")
	public void a_beehive_api() throws Throwable {
	    SetupHeaders.setupBaseURL();
	}

	@When("^the api is authenticated using \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_api_is_authenticated_using_and(String user, String pass) throws Throwable {
		username = user;
		password = pass;
		authenticate.authenticate(user, pass);
	}

	@Then("^Authentication should be successful$")
	public void authentication_should_be_successful() throws Throwable {
		authenticate.validateAuthentication();
	}

	@When("^the user calls the login API using JWT$")
	public void the_user_logins_using_JWT() throws Throwable {
		SetupHeaders.setupBaseURLwithJWT(authenticate.getJwt());
		login.login(username, password);
	}

	@Then("^login response should be success$")
	public void login_response_should_be_success() throws Throwable {
	    login.validateLogin();
	}


}
