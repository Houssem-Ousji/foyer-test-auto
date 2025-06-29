const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const apiClient = require('../helpers/apiClient');

let response;
let endpoint;
let payload;

Given('the API endpoint is {string}', (path) => {
    endpoint = path;
});

Given('the payload is:', (dataTable) => {
    const [headers, values] = dataTable.rawTable;
    payload = Object.fromEntries(headers.map((h, i) => [h, values[i]]));
    let x = 0
});
  

When('I send a GET request', async () => {
    response = await apiClient.get(endpoint);
});
When('I send a DELETE request', async () => {
    response = await apiClient.delete(endpoint);
});
When('I send a POST request', async () => {
      response = await apiClient.post(endpoint, payload);
  });
When('I send a PUT request', async () => {
    response = await apiClient.put(endpoint, payload);
});
  

Then('the response status should be {int}', (statusCode) => {
    expect(response.status).to.equal(statusCode);
});

Then('the response body should contain {string}', (field) => {
    expect(response.data).to.have.property(field);
});
Then('the response message should be {string}', (message) => {
    if (response.data.message != message){
        throw new Error(`Expected message to be "${message}", but got "${response.data.message}"`);
    }
});
Then('the message of response should be {string}',  (message) => {
    if (response.data != message) {
        throw new Error(`Expected message to be "${message}", but got "${response.data}"`);
    }
});
Then('the response body should equal to:', function (dataTable) {
    const expected = dataTable.hashes()[0]; 
    const actual = response?.data || {};

    for (const key in expected) {
        const actualValue = actual[key];
        if (typeof actualValue === 'number') {
            expected[key] = Number(expected[key]);
        }
    }

    expect(actual).to.deep.equal(expected);
});

Then('the response body should be an array', function () {
    expect(Array.isArray(response.data)).to.be.true;
});
