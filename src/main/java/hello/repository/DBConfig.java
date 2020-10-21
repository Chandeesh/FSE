package hello.repository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import hello.Customer;

@Configuration
@EnableJpaRepositories("hello.repository.*")
public class DBConfig {
	
	@Bean
    public CommandLineRunner initDatabase(CustomerRepository repository) {
        return (args) -> {
            // save a couple of customers
            repository.save(new Customer(1,"Jack","jack@gmail.com"));
            
        };
    }
}
