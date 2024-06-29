const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  database: "cel_schema",
  user: "root",
  password: "contra123",
});

connection.connect((error) => {
  if (error) console.log("Error al entrar a la base de datos");
  console.log("Conexión exitosa a la base de datos");
});

module.exports = connection;
