const fs = require('fs');
const path = require('path');

const connection = require('./connection');

const buildDataSql = fs
  .readFileSync(path.join(__dirname, 'sql', 'db_build.sql'))
  .toString();

connection
  .query(buildDataSql)
  .then(data => console.log('database successfully built'))
  .catch(err => console.log(err));
