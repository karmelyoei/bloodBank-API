const connection = require('../models/db_config/connection');

let getdonors = (req, res) => {
  const sql = {
    text: 'SELECT * FROM donors'
  };
  connection.query(sql.text, (err, result) => {
    if (err) console.log(err);
    res.send(result.rows);
  });
};

let postdonors = (req, res) => {
  const sql = {
    text:
      'INSERT INTO donors (name, blood_group, contact_number) VALUES ($1,$2,$3);',
    values: ['SteveJobs', 'B', 2456789]
  };
  connection.query(sql.text, sql.values, (err, result) => {
    if (err) console.log(err);
    console.log(result);
    res.json(result.rowCount);
  });
};

module.exports = { getdonors, postdonors };
