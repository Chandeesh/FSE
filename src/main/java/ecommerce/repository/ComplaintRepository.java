package ecommerce.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import ecommerce.model.Complaint;

public interface ComplaintRepository extends MongoRepository<Complaint, String> {

}
