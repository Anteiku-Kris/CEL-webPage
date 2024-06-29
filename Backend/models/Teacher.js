const connection = require("../config/database");

const Teacher = {
  getAll: (callback) => {
    connection.query("SELECT * FROM teachers", callback);
  },
  getById: (id, callback) => {
    connection.query("SELECT * FROM teachers WHERE id = ?", [id], callback);
  },
  create: (teacher, callback) => {
    connection.query("INSERT INTO teachers SET ?", teacher, callback);
  },
  update: (id, teacher, callback) => {
    connection.query(
      "UPDATE teachers SET ? WHERE id = ?",
      [teacher, id],
      callback
    );
  },
  delete: (id, callback) => {
    connection.query("DELETE FROM teachers WHERE id = ?", [id], callback);
  },
};

module.exports = Teacher;
