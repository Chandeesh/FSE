package ecommerce;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories; 
 

@SpringBootApplication
@EnableMongoRepositories("ecommerce.repository")
@ComponentScan
public class SpringBootDemoApplication {
 
    public static void main(String[] args) {
        SpringApplication.run(SpringBootDemoApplication.class, args);
    }
}