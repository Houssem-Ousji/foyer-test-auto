@delete
Feature: Delete Chambre API

    Scenario: Successfully delete a new chambre
        Given the API endpoint is "/chambre/delete/19"
        When I send a DELETE request
        Then the response status should be 200
        And the message of response should be "Chambre with id 19 was deleted successfully."