$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Ecommerce.feature");
formatter.feature({
  "line": 2,
  "name": "Test all the features of the Ecommerce application",
  "description": "",
  "id": "test-all-the-features-of-the-ecommerce-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AcceptanceTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify the login response upon the given inputs",
  "description": "",
  "id": "test-all-the-features-of-the-ecommerce-application;verify-the-login-response-upon-the-given-inputs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@LoginUser"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "a login api",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the api is called with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate the response with status \"\u003chttp\u003e\" and \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "test-all-the-features-of-the-ecommerce-application;verify-the-login-response-upon-the-given-inputs;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "http",
        "message"
      ],
      "line": 11,
      "id": "test-all-the-features-of-the-ecommerce-application;verify-the-login-response-upon-the-given-inputs;;1"
    },
    {
      "cells": [
        "chandeesh.babu@gmail.com",
        "chand123",
        "200",
        "success"
      ],
      "line": 12,
      "id": "test-all-the-features-of-the-ecommerce-application;verify-the-login-response-upon-the-given-inputs;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Verify the login response upon the given inputs",
  "description": "",
  "id": "test-all-the-features-of-the-ecommerce-application;verify-the-login-response-upon-the-given-inputs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@LoginUser"
    },
    {
      "line": 1,
      "name": "@AcceptanceTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "a login api",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the api is called with \"chandeesh.babu@gmail.com\" and \"chand123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "validate the response with status \"200\" and \"success\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});