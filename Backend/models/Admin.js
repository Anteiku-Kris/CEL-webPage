const connection = require("../config/database");

const Admin = {
  getByEmail: (email, callback) => {
    connection.query("SELECT * FROM admins WHERE email = ?", [email], callback);
  },
  create: (admin, callback) => {
    connection.query("INSERT INTO admins SET ?", admin, callback);
  }
};

module.exports = Admin;
