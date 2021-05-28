package ecommerce.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import ecommerce.model.UserRegister;

public interface UserRepository extends MongoRepository<UserRegister,String>{

}
