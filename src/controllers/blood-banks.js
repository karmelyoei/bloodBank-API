const connection = require('../models/db_config/connection');

let getBloodBank = (req, res) => {
  const sql = {
    text: 'SELECT * FROM blood_banks'
  };
  connection.query(sql.text, (err, result) => {
    if (err) console.log(err);
    res.send(result.rows);
  });
};

let postBloodBank = (req, res) => {
  const sql = {
    text: `INSERT INTO blood_banks(name, city, contact_number,donors_id) VALUES ($1,$2,$3,$4);`,
    values: ['JonKock', 'Seoul', 5894256, 3]
  };

  connection.query(sql.text, sql.values, (err, result) => {
    if (err) console.log(err);
    res.json(result.rowCount);
  });
};
module.exports = { getBloodBank, postBloodBank };
