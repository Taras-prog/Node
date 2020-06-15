const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'new_schema',
    password: 'tarascr777!'
  });


module.exports = connection;