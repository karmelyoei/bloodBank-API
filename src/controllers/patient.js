const connection = require('../models/db_config/connection');

let getPatients = (req, res) => {
  const sql = {
    text: 'SELECT * FROM patients'
  };
  connection.query(sql.text, (err, result) => {
    if (err) console.log(err);
    res.send(result.rows);
  });
};

let postPatients = (req, res) => {
  const sql = {
    text: `INSERT INTO patients (name, blood_group)
     VALUES ($1,$2);`,
    values: ['Nermen', 'O']
  };
  connection.query(sql.text, sql.values, (err, result) => {
    if (err) console.log(err);
    console.log(result);
    res.json(result.rowCount);
  });
};

module.exports = { getPatients, postPatients };
