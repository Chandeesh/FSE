package com.test.stepDefinition;

import com.webapplication.WesiteTest;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {

	private WesiteTest test;
	
	@Given("^a Ecommerce website$")
	public void a_Ecommerce_website() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		
	}

	@When("^the user logins with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_user_logins_with_and(String arg1, String arg2) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		test.loginUser(arg1, arg2);
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

}
