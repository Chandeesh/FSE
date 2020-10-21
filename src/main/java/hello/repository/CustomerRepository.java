package hello.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import hello.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,Integer> {

}
