package AutoTest.Cucumber_Test;


import org.junit.Assert;
import org.openqa.selenium.By;

import Utility.All_Drivers;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SecondLoginTest extends All_Drivers {
	
	All_Drivers GetBrowser = new All_Drivers();
	
	
	@Given("^am on the \"([^\"]*)\" page$")
public void am_on_the_page(String arg1) throws Throwable {
 switch (arg1) {
	 case"Landing":
		 GetBrowser.set_driver("firefox");
		 driver.get("http://automatetillinfinity.co.uk/");
		 String ActualLandingTitle = driver.getTitle();
		 String ExpectedLandingTitle = "Landing";
		 Assert.assertEquals(ActualLandingTitle, ExpectedLandingTitle);
	 break;
	 
	 case"Home":
		 String ActualHomeTitle = driver.getTitle();
		 String ExpectedHomeTitle="Home";
		 Assert.assertEquals(ActualHomeTitle, ExpectedHomeTitle);
	 break;
	 default:
	 break;
	 
 }
    
}

@Given("^I enter my \"([^\"]*)\" as \"([^\"]*)\"$")
public void i_enter_my_as(String arg1, String arg2) throws Throwable {
	switch (arg1) {
	 case"Username":
		 driver.findElement(By.id("usernamelogin")).sendKeys("wegit");
	 break;
	 
	 case"Password":
		 driver.findElement(By.id("loginPassword")).sendKeys("12345678");
	 break;
	 default:
	 break;
	}
    
}

@When("^I click \"([^\"]*)\" button$")
public void i_click_button(String arg1) throws Throwable {
	switch (arg1) {
	 case"Login":
		 driver.findElement(By.id("LoginBtn")).click();
	 break;
	 
	 case"":
	 break;
	 default:
	 break;
	}  
}


    
}

