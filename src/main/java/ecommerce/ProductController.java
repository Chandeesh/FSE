package ecommerce;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ecommerce.model.Complaint;
import ecommerce.model.Products;

@RestController
@RequestMapping(path = "/products")
public class ProductController {

	@Autowired
	ProductService productservice;
	
	@PutMapping("/sellproducts")
	public ResponseEntity<Object> addProduct(@RequestBody Products product) {
		return productservice.sellProduct(product);
	}
	
	@PutMapping("/raiseissue")
	public ResponseEntity<Object> raiseComplaint(@RequestBody Complaint complaint) {
		return productservice.raiseIssue(complaint);
	}
	
	@GetMapping("/getproducts")
	public List<Products> getProducts() {
		return productservice.getProducts();
	}
	
	@GetMapping(value = "/api/image")
    public ResponseEntity<InputStreamResource> getImage(@RequestParam(value="name") String imagename) throws IOException {

        ClassPathResource imgFile = new ClassPathResource("image/"+imagename+".png");

        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_PNG)
                .body(new InputStreamResource(imgFile.getInputStream()));
    }
}
