package ecommerce;

import java.util.List;

import org.springframework.http.ResponseEntity;

import ecommerce.model.User;
import ecommerce.model.UserData;
import ecommerce.model.UserRegister;


public interface Services {

	public ResponseEntity<Object> login(User user);
	public ResponseEntity<Object> confirmuser(String token);
	public ResponseEntity<Object> registerNewUser(UserData userdata);
	public String getAddress(String email);
	public List<UserRegister> getCustomers();
}