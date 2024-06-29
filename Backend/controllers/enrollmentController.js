const Enrollment = require("../models/Enrollment");

exports.getAllEnrollments = (req, res) => {
  Enrollment.getAll((error, enrollments) => {
    if (error) return console.error(error.message);
    res.json(enrollments);
  });
};

exports.getEnrollmentById = (req, res) => {
  const { id } = req.params;
  Enrollment.getById(id, (error, enrollment) => {
    if (error) return console.error(error.message);
    if (enrollment.length === 0) return console.log("Enrollment not found");
    res.json(Enrollment[0]);
  });
};

exports.createEnrollment = (req, res) => {
  const newEnrollment = req.body;
  Enrollment.create(newEnrollment, (error, result) => {
    if (error) return console.error(error.message);
    res
      .status(201)
      .send(`Enrollment created succesfully with the ID : ${result.insertId}`);
  });
};

exports.updateEnrollment = (req, res) => {
  const { id } = req.params;
  const updateEnrollment = req.body;
  Teacher.update(id, updateTeacher, (error) => {
    if (error) return console.error(error.message);
    res.send("Teacher has been updated");
  });
};

exports.deleteEnrollment = (req, res) => {
  const { id } = req.params;
  Enrollment.delete(id, (error) => {
    if (error) return console.error(error.message);
    res.send("Enrollment deleted");
  });
};
