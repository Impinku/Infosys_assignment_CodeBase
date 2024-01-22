Feature: iTunes search API

  Scenario: Validate i tunes search api with parameter
    Given Call i tunes search api
    Then Verify status code is 200
    Then Verify result count is "50"

  Scenario: Validate i tunes search api without parameter
    Given Call i tunes search api without parameter
    Then Verify status code is 200
    Then Verify result count is "0"

  Scenario: Validate i tunes search api with term and limit parameter
    Given Call i tunes search api with "jack+johnson" and "25"
    Then Verify status code is 200
    Then Verify result count is "25"

  Scenario: Validate i tunes search api with term and entity parameter
    Given Call i tunes search api with "jack+johnson" and entity "musicVideo"
    Then Verify status code is 200
    Then Verify result count is "16"

  Scenario: Validate i tunes search api with term and canada i tunes store parameter
    Given Call i tunes search api with "jim+jones" and country "ca"
    Then Verify status code is 200
    Then Verify result count is "50"

  Scenario: Validate i tunes search api with term and united states i tunes store and entity parameter
    Given Call i tunes search api with "yelp" and country "us" and entity "software"
    Then Verify status code is 200
    Then Verify result count is "50"

  Scenario: Validate i tunes search api with invalid parameter
    Given Call i tunes search api with invalid param
    Then Verify status code is 200
    Then Verify result count is "0"