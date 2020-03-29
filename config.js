const dotenv = require('dotenv');
dotenv.config();
let config = {
  endpoint: process.env.API_URL,
  port: process.env.PORT,
  database_endpoint: process.env.DB_URL
};

module.exports = { config }