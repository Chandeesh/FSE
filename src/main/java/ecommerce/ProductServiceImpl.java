package ecommerce;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import ecommerce.model.Complaint;
import ecommerce.model.Products;
import ecommerce.model.ProductsList;
import ecommerce.repository.ComplaintRepository;
import ecommerce.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductRepository prodReps;

	@Autowired
	ComplaintRepository complaintreps;

	public ResponseEntity<Object> sellProduct(Products products) {
		try {
			prodReps.save(products);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	public List<Products> getProducts() {
		List<Products> prodlist = new ArrayList<>();
		prodlist = prodReps.findAll();
		return prodlist;
	}

	public ResponseEntity<Object> raiseIssue(Complaint complaint) {
		try {
			complaintreps.save(complaint);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
}
