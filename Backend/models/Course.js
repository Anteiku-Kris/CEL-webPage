const connection = require("../config/database");

const Course = {
  getAll: (callback) => {
    connection.query("SELECT * FROM courses", callback);
  },
  getById: (id, callback) => {
    connection.query("SELECT * FROM courses WHERE id = ?", [id], callback);
  },
  create: (course, callback) => {
    connection.query("INSERT INTO courses SET ?", course, callback);
  },
  update: (id, course, callback) => {
    connection.query(
      "UPDATE courses SET ? WHERE id = ?",
      [course, id],
      callback
    );
  },
  delete: (id, callback) => {
    connection.query("DELETE FROM courses WHERE id = ?", [id], callback);
  },
};

module.exports = Course;
