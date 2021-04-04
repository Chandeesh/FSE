package com.webapplication;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.FindBy;

import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.core.pages.WebElementFacade;

public class WesiteTest extends PageObject {

	@FindBy(xpath="//*[@name='email']")
	private WebElementFacade userid;
	
	@FindBy(xpath="//*[@name='psw']")
	private WebElementFacade password;

	@FindBy(xpath="//*[@class='signupbtn']")
	private WebElementFacade loginBtn;
	
	@FindBy(xpath="//a[contains(text(),'Manage Customers')]")
	private WebElementFacade manage;
	
	@FindBy(xpath="//a[contains(text(),'View Products')]")
	private WebElementFacade products;
	
	@FindBy(xpath="//div[contains(text(),'Incorrect Credentials')]")
	private WebElementFacade incorrect;
	
	public void loginUser(String username, String pass) {
		WebDriver driver = getDriver();
		driver.get("http://localhost:8080");
//		userid.sendKeys(username);
//		password.sendKeys(pass);
//		loginBtn.click();
	}
	
	public void successLoginUser() {
//		Assert.assertEquals(products.getText(), "View Products");
	}
	
	public void failureLogin() throws InterruptedException {
//		Assert.assertEquals(incorrect.getText(), "Incorrect Credentials");
	}
}
