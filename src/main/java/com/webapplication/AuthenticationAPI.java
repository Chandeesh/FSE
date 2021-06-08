package com.webapplication;

import static net.serenitybdd.rest.SerenityRest.rest;
import static net.serenitybdd.rest.SerenityRest.then;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.model.User;

public class AuthenticationAPI {

	public void authenticate(String username, String password) throws JsonProcessingException {
		User user = new User();
		ObjectMapper mapper = new ObjectMapper();
		user.setUsername(username);
		user.setPassword(password);
		rest().given().body(mapper.writeValueAsString(user)).post("/authenticate").prettyPrint();
	}
	
	public void validateAuthentication() {
		then().assertThat().statusCode(200);
	}
	
	public String getJwt() {
		return then().extract().body().jsonPath().get("token");
	}
}
