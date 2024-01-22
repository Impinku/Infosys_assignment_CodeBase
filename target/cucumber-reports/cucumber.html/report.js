$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/iTunesSearchAPI.feature");
formatter.feature({
  "name": "iTunes search API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate i tunes search api with parameter",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Call i tunes search api",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.Call_i_tunes_search_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Verify_status_code_is_200()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify result count is \"50\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Verify_result_count_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate i tunes search api without parameter",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Call i tunes search api without parameter",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.Call_i_tunes_search_api_without_parameter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Verify_status_code_is_200()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify result count is \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Verify_result_count_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate i tunes search api with term and limit parameter",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Call i tunes search api with \"jack+johnson\" and \"25\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.call_i_tunes_search_api_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Verify_status_code_is_200()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify result count is \"25\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Verify_result_count_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate i tunes search api with term and entity parameter",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Call i tunes search api with \"jack+johnson\" and entity \"musicVideo\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.call_i_tunes_search_api_with_and_entity(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Verify_status_code_is_200()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify result count is \"16\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Verify_result_count_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate i tunes search api with term and canada i tunes store parameter",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Call i tunes search api with \"jim+jones\" and country \"ca\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.call_i_tunes_search_api_with_and_country(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Verify_status_code_is_200()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify result count is \"50\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Verify_result_count_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate i tunes search api with term and united states i tunes store and entity parameter",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Call i tunes search api with \"yelp\" and country \"us\" and entity \"software\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.call_i_tunes_search_api_with_and_country_and_entity(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Verify_status_code_is_200()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify result count is \"50\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Verify_result_count_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate i tunes search api with invalid parameter",
  "description": "",
  "keyword": "Scenario"
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
  "name": "Verify status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Verify_status_code_is_200()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify result count is \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Verify_result_count_is(int)"
});
formatter.result({
  "status": "passed"
});
});