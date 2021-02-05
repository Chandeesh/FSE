package ecommerce;

import java.util.List;

import org.springframework.http.ResponseEntity;

import ecommerce.model.Complaint;
import ecommerce.model.Products;

public interface ProductService {

	public ResponseEntity<Object> sellProduct(Products products);
	public List<Products> getProducts();
	public ResponseEntity<Object> raiseIssue(Complaint complaint);
}
