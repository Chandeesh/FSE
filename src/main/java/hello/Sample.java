package hello;

import java.util.List;

public class Sample {

	public Sample() {
		 
    }
 
    public Sample(List<Employee> i) {
        super();
        this.list = i;
    }
  
    public List<Employee> getList() {
		return list;
	}

	public void setList(List<Employee> list) {
		this.list = list;
	}

	private List<Employee> list;

}
