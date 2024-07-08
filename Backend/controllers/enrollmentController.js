const Enrollment = require("../models/Enrollment");
const Course = require("../models/Course");
const Student = require("../models/Student");

exports.getAllEnrollments = (req, res) => {
  Enrollment.getAll(async (error, enrollments) => {
    if (error) return console.error(error.message);

    const enrollmentsWithDetails = await Promise.all(
      enrollments.map(async (enrollment) => {
        // Obtener el curso y el estudiante utilizando los métodos getById
        const course = await new Promise((resolve, reject) => {
          Course.getById(enrollment.course_id, (error, result) => {
            if (error) return reject(error);
            resolve(result[0]);
          });
        });

        const student = await new Promise((resolve, reject) => {
          Student.getById(enrollment.student_id, (error, result) => {
            if (error) return reject(error);
            resolve(result[0]);
          });
        });

        return {
          ...enrollment,
          courseName: course ? course.name : "Unknown",
          studentName: student ? student.name : "Unknown"
        };
      })
    );

    res.json(enrollmentsWithDetails);
  });
};

exports.getEnrollmentById = (req, res) => {
  const { id } = req.params;
  Enrollment.getById(id, (error, enrollment) => {
    if (error) return console.error(error.message);
    if (enrollment.length === 0) return console.log("Enrollment not found");
    res.json(enrollment[0]);
  });
};

exports.createEnrollment = (req, res) => {
  const newEnrollment = req.body;
  Enrollment.create(newEnrollment, (error, result) => {
    if (error) return console.error(error.message);
    res.status(201).json({
      message: "Enrollment created successfully",
      enrollmentId: result.insertId
    });
  });
};

exports.updateEnrollment = (req, res) => {
  const { id } = req.params;
  const updateEnrollment = req.body;
  Enrollment.update(id, updateEnrollment, (error) => {
    if (error) return console.error(error.message);
    res.send("Enrollment has been updated");
  });
};

exports.deleteEnrollment = (req, res) => {
  const { id } = req.params;
  Enrollment.delete(id, (error) => {
    if (error) return console.error(error.message);
    res.send("Enrollment deleted");
  });
};
