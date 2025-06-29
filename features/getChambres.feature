@getAll
Feature: Get all Chambres API

    Scenario: Retrieve list of all chambres
        Given the API endpoint is "/chambre/all"
        When I send a GET request
        Then the response status should be 200
        And the response body should be an array
