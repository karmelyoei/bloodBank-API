const { Pool } = require('pg');
const dotEnv = require('dotenv');

dotEnv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('Database doesnt Exist!');
}

module.exports = new Pool({
  connectionString,
  ssl: !connectionString.includes('localhist')
});
