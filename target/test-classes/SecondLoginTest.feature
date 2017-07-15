#Author: Ben_Bolaji
@duper
Feature: As an user, i want to be able to login and logout.

  @demo2
  Scenario Outline: Login and logout
    Given am on the "Landing" page
    And I enter my "Username" as "<Username_Details>"
    And I enter my "Password" as "<Password_Details>"
    When I click "Login" button
    Then am on the "Home" page

    Examples: login details
      | Username_Details | Password_Details |
      | wegit            |         12345678 |
      #| aut001           |         12345678 |
      
