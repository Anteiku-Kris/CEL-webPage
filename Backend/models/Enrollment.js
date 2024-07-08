const connection = require("../config/database");

const Enrollment = {
  getAll: (callback) => {
    connection.query("SELECT * FROM enrollments", callback);
  },
  getById: (id, callback) => {
    connection.query("SELECT * FROM enrollments WHERE id = ?", [id], callback);
  },
  create: (enrollment, callback) => {
    const newEnrollment = {
      course_id: enrollment.courseId,
      student_id: enrollment.studentId,
      enrollment_date: new Date(enrollment.enrollmentDate)
    };
    connection.query("INSERT INTO enrollments SET ?", newEnrollment, callback);
  },
  update: (id, enrollment, callback) => {
    const updateEnrollment = {
      course_id: enrollment.courseId,
      student_id: enrollment.studentId,
      enrollment_date: enrollment.enrollmentDate,
    };
    connection.query(
      "UPDATE enrollments SET ? WHERE id = ?",
      [updateEnrollment, id],
      callback
    );
  },
  delete: (id, callback) => {
    connection.query("DELETE FROM enrollments WHERE id = ?", [id], callback);
  },
};

module.exports = Enrollment;
