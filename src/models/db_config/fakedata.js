const fs = require('fs');
const path = require('path');

const connection = require('./connection');

const fakeDataSql = fs
  .readFileSync(path.join(__dirname, 'sql', 'fakedata.sql'))
  .toString();

connection
  .query(fakeDataSql)
  .then(() => console.log('database successfully inserted'))
  .catch(err => console.log(err));
