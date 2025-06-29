const axios = require('axios');
require('dotenv').config();

const baseURL = process.env.BASE_URL || 'http://localhost:3000/api';

const instance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

module.exports = instance;
