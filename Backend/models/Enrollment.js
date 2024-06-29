const connection = require("../config/database");

const Enrollment = {
  getAll: (callback) => {
    connection.query("SELECT * FROM enrollments", callback);
  },
  getById: (callback) => {
    connection.query("SELECT * FROM enrollments WHERE id = ?", [id], callback);
  },
  create: (enrollment, callback) => {
    connection.query("INSERT INTO enrollments set ?", enrollment, callback);
  },
  update: (id, enrollment, callback) => {
    connection.query(
      "UPDATE enrollments SET ? WHERE id = ?",
      [enrollment, id],
      callback
    );
  },
  delete: (id, callback) => {
    connection.query("DELETE FROM enrollments WHERE id = ?", [id], callback);
  },
};

module.exports = Enrollment;
