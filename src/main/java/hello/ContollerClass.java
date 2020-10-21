package hello; 
import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;
import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import hello.repository.CustomerRepository;


 
 
@RestController
@RequestMapping(path = "/employees")
public class ContollerClass 
{
    @Autowired
    private EmployeeVO employeeDao;
    
    @Autowired
    private CustomerRepository reps;
     
    @GetMapping(path="/emp/{id}", produces = "application/json")
    public Sample getEmployees(@PathVariable(value = "id") Integer id) 
    {
    	List<Employee> emp = new ArrayList<>();
    	emp.add(employeeDao.getAllEmployees().getEmployeeList().get(id));
    	System.out.print(id);
    	return new Sample(emp);
    }
     
    @PostMapping(path= "/", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Object> addEmployee(@Valid @RequestBody Employee employee) 
    {
        Integer id = employeeDao.getAllEmployees().getEmployeeList().size() + 1;
        employee.setId(id);
         
        employeeDao.addEmployee(employee);
         
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                                    .path("/{id}")
                                    .buildAndExpand(employee.getId())
                                    .toUri();
         
        return ResponseEntity.created(location).build();
    }
    
    @GetMapping(path= "/cons", produces = "application/json")
    public ResponseEntity<Sample> getAllEmployeesJSON() 
    {
    	 final String uri = "http://localhost:8080/employees/emp/1";
         RestTemplate restTemplate = new RestTemplate();
         HttpHeaders headers = new HttpHeaders();
         headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
         HttpEntity <String> entity = new HttpEntity<String>(headers);
         ResponseEntity<Sample> ebyt = restTemplate.exchange(uri, HttpMethod.GET, entity, Sample.class);
		return ebyt;  
    }
    
    @GetMapping(path="/getAllCustomers", produces = "application/json")
    public List<Customer> getCustomers() {
    	
    	return (List<Customer>) reps.findAll();
    }
    
    @PostMapping("/addusers")
    public void addUser(@RequestBody Customer customer) {
    	reps.save(customer);
    }
    
    @DeleteMapping("/deleteuser/{id}")
    public void user(@PathVariable(value = "id") Integer id) {
    	reps.deleteById(id);
    }
    
    @PutMapping("/updateuser")
    public void update(@RequestBody Customer customer) {
    	Customer cust = reps.findById(customer.getId()).get();
    	cust.setEmail(customer.getEmail());
    	cust.setId(customer.getId());
    	cust.setName(customer.getName());
    	reps.save(cust);
    	
    }
    
}