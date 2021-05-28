package ecommerce.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import ecommerce.model.Products;

public interface ProductRepository extends MongoRepository<Products, String> {

}
