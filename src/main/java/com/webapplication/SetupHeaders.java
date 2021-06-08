package com.webapplication;


import static net.serenitybdd.rest.SerenityRest.setDefaultRequestSpecification;
import java.io.IOException;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;

public class SetupHeaders {
	
	public static void setupBaseURL() throws IOException {
		RestAssured.useRelaxedHTTPSValidation();
		setDefaultRequestSpecification(new RequestSpecBuilder().setUrlEncodingEnabled(false).setContentType("application/json")
				.setBaseUri(ConfigUtils.getValue("APIBase")).build());
	}
	
	public static void setupBaseURLwithJWT(String jwt) throws IOException {
		RestAssured.useRelaxedHTTPSValidation();
		setDefaultRequestSpecification(new RequestSpecBuilder().setUrlEncodingEnabled(false).setContentType("application/json")
				.addHeader("Authorization","Bearer "+jwt).setBaseUri(ConfigUtils.getValue("APIBase")).build());
	}
}
