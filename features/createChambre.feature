@create
Feature: Create Chambre API

    Scenario: Successfully create a new chambre
        Given the API endpoint is "/chambre/add"
        And the payload is:
            | numeroChambre | typeC  |
            | 4444 | SIMPLE | 
        When I send a POST request
        Then the response status should be 201
        And the response body should contain "chambre"
        And the response message should be "Chambre added successfully."
