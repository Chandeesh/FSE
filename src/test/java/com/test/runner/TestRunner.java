package com.test.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        features = {"src/test/resources/features"},
        glue= {"com.test.stepDefinition"},
        tags= "@AcceptanceTestAPI"
)
public class TestRunner {

}
