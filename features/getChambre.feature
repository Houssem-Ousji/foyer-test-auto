@getChambre
Feature: Get single Chambre API

    Scenario: Retrieve a chambre by ID
        Given the API endpoint is "/chambre/3"
        When I send a GET request
        Then the response status should be 200
        And the response body should equal to:
            | idChambre | numeroChambre | typeC  |
            | 3         | 103           | TRIPLE |
