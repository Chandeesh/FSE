package com.webapplication;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.FindBy;

import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.core.pages.WebElementFacade;

public class WesiteTest extends PageObject {

	@FindBy(xpath="//*[@id='email']")
	private WebElementFacade userid;
	
	@FindBy(xpath="//*[@type='password']")
	private WebElementFacade password;

	@FindBy(xpath="//a[contains(text(),'Login')]")
	private WebElementFacade loginBtn;
	
	@FindBy(xpath="//*[@type='submit']")
	private WebElementFacade submit;
	
	@FindBy(xpath="//a[contains(text(),'Weight')]")
	private WebElementFacade weight;
	
	@FindBy(xpath="//div[@role='alertdialog']")
	private WebElementFacade failureToast;
	
	@FindBy(xpath="//*[@class='flot-overlay']")
	private WebElementFacade weightGraph;
	
	public void loginUser(String url,String username, String pass) {
		WebDriver driver = getDriver();
		driver.get(url);
		loginBtn.click();
		userid.sendKeys(username);
		password.sendKeys(pass);
		submit.click();
	}
	
	public void clickWeight() {
		weight.click();
	}
	
	public void successLoginUser() {
		Assert.assertTrue(weight.isPresent());
	}
	
	public void failureLogin() throws InterruptedException {
		Assert.assertTrue(failureToast.isDisplayed());
	}
	
	public void assertPlot() throws InterruptedException {
		Assert.assertTrue(weightGraph.isDisplayed());
	}
}
