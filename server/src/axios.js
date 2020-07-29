const axios = require('axios');
const config = require('../config/config')

axios.defaults.baseURL = config.wotbBaseURL
