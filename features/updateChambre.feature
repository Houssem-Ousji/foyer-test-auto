@update
Feature: Update Chambre API

    Scenario: Successfully update an existing chambre
        Given the API endpoint is "/chambre/update/2"
        And the payload is:
            | numeroChambre | typeC  |
            | 202 | DOUBLE |
        When I send a PUT request
        Then the response status should be 200
        And the response body should contain "chambre"
        And the response message should be "Chambre updated successfully."
