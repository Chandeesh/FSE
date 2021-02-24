package com.test.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        features = {"src/test/resources/features"},
        glue= {"com.test.stepDefinition"},
        tags= {"@LoginUserSuccess,@LoginUserFailure"}
)
public class TestRunner {

}
