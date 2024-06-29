const connection = require("../config/database");

const Student = {
  getAll: (callback) => {
    connection.query("SELECT * FROM students", callback);
  },
  getById: (id, callback) => {
    connection.query("SELECT * FROM students WHERE id = ?", [id], callback);
  },
  create: (student, callback) => {
    connection.query("INSERT INTO students SET ?", student, callback);
  },
  update: (id, student, callback) => {
    connection.query(
      "UPDATE students SET ? WHERE id = ?",
      [student, id],
      callback
    );
  },
  delete: (id, callback) => {
    connection.query("DELETE FROM students WHERE id = ?", [id], callback);
  },
};

module.exports = Student;
