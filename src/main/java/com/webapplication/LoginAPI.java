package com.webapplication;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.model.User;


import static net.serenitybdd.rest.SerenityRest.rest;
import static net.serenitybdd.rest.SerenityRest.then;

import org.eclipse.jetty.util.log.Log;
public class LoginAPI {

	public void login(String username, String password) throws JsonProcessingException {
		User user = new User();
		ObjectMapper mapper = new ObjectMapper();
		user.setUsername(username);
		user.setPassword(password);
		rest().given().log().all().body(mapper.writeValueAsString(user).replace("username", "email")).post("/beehives/login").prettyPrint();
	}
	
	public void validateLogin() {
		then().assertThat().statusCode(200);
	}
}
