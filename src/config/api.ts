import axios from 'axios';

axios.defaults.adapter = require('axios/lib/adapters/http');

export const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
});
