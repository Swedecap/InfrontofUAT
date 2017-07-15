$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Ist_login_test.feature");
formatter.feature({
  "line": 2,
  "name": "As a user,",
  "description": "I want to be able to login and logout",
  "id": "as-a-user,",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@duper"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Login and Logout",
  "description": "",
  "id": "as-a-user,;login-and-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@demo2"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "am on the Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter my Username as wegit",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter my Password as 123455678",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "am on the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ist_login_test.am_on_the_Landing_Page()"
});
formatter.result({
  "duration": 13711998707,
  "status": "passed"
});
formatter.match({
  "location": "ist_login_test.i_enter_my_Username_as_wegit()"
});
formatter.result({
  "duration": 114927838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123455678",
      "offset": 23
    }
  ],
  "location": "ist_login_test.i_enter_my_Password_as(int)"
});
formatter.result({
  "duration": 80065210,
  "status": "passed"
});
formatter.match({
  "location": "ist_login_test.i_click_Login_button()"
});
formatter.result({
  "duration": 1725228573,
  "status": "passed"
});
formatter.match({
  "location": "ist_login_test.am_on_the_Home_Page()"
});
formatter.result({
  "duration": 24848,
  "status": "passed"
});
formatter.uri("SecondLoginTest.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Ben_Bolaji"
    }
  ],
  "line": 3,
  "name": "As an user, i want to be able to login and logout.",
  "description": "",
  "id": "as-an-user,-i-want-to-be-able-to-login-and-logout.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@duper"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login and logout",
  "description": "",
  "id": "as-an-user,-i-want-to-be-able-to-login-and-logout.;login-and-logout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@demo2"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "am on the \"Landing\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter my \"Username\" as \"\u003cUsername_Details\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter my \"Password\" as \"\u003cPassword_Details\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click \"Login\" button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "am on the \"Home\" page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "login details",
  "description": "",
  "id": "as-an-user,-i-want-to-be-able-to-login-and-logout.;login-and-logout;login-details",
  "rows": [
    {
      "cells": [
        "Username_Details",
        "Password_Details"
      ],
      "line": 14,
      "id": "as-an-user,-i-want-to-be-able-to-login-and-logout.;login-and-logout;login-details;1"
    },
    {
      "cells": [
        "wegit",
        "12345678"
      ],
      "line": 15,
      "id": "as-an-user,-i-want-to-be-able-to-login-and-logout.;login-and-logout;login-details;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Login and logout",
  "description": "",
  "id": "as-an-user,-i-want-to-be-able-to-login-and-logout.;login-and-logout;login-details;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@duper"
    },
    {
      "line": 5,
      "name": "@demo2"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "am on the \"Landing\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter my \"Username\" as \"wegit\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter my \"Password\" as \"12345678\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click \"Login\" button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "am on the \"Home\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Landing",
      "offset": 11
    }
  ],
  "location": "SecondLoginTest.am_on_the_page(String)"
});
formatter.result({
  "duration": 612839538,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cL[ogin]\u003e but was:\u003cL[anding]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat AutoTest.Cucumber_Test.SecondLoginTest.am_on_the_page(SecondLoginTest.java:25)\r\n\tat ✽.Given am on the \"Landing\" page(SecondLoginTest.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 12
    },
    {
      "val": "wegit",
      "offset": 26
    }
  ],
  "location": "SecondLoginTest.i_enter_my_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 12
    },
    {
      "val": "12345678",
      "offset": 26
    }
  ],
  "location": "SecondLoginTest.i_enter_my_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 9
    }
  ],
  "location": "SecondLoginTest.i_click_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 11
    }
  ],
  "location": "SecondLoginTest.am_on_the_page(String)"
});
formatter.result({
  "status": "skipped"
});
});