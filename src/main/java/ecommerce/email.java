package ecommerce;

public class email {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String email = "mmvinaykumar.mm%40gmail.com";
		System.out.println("mmvinaykumar.mm@gmail.com".contains(email.substring(0, email.indexOf("%"))));
	}

}
