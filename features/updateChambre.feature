@update
Feature: Update Chambre API

    Scenario: Successfully update an existing chambre
        Given the API endpoint is "/chambre/update/1547"
        And the payload is:
            | numeroChambre | typeC  |
            | 255           | TRIPLE |
        When I send a PUT request
        Then the response status should be 200
        And the response body should contain "chambre"
        And the response message should be "Chambre updated successfully."
