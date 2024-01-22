$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/iTunesSearchAPI.feature");
formatter.feature({
  "name": "iTunes search API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Project"
    }
  ]
});
formatter.scenario({
  "name": "Validate i tunes search api with invalid parameter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Project"
    },
    {
      "name": "@TC\u003d11"
    }
  ]
});
formatter.step({
  "name": "Call i tunes search api with invalid param",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.Call_i_tunes_search_api_with_invalid_param()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify status code is \"400\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Verify_status_code_is_200(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat StepDefinition.Verify_status_code_is_200(StepDefinition.java:138)\r\n\tat ✽.Verify status code is \"400\"(src/test/java/iTunesSearchAPI.feature:75)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify result count is \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Verify_result_count_is(int)"
});
formatter.result({
  "status": "skipped"
});
});