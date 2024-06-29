const Course = require("../models/Course");

exports.getAllCourses = (req, res) => {
  Course.getAll((error, courses) => {
    if (error) return console.error(error.message);
    res.json(courses);
  });
};

exports.getCourseById = (req, res) => {
  const { id } = req.params;
  Course.getById(id, (error, course) => {
    if (error) return console.error(error.message);
    if (course.length === 0) return console.log("Curso no encontrado");
    res.json(Course[0]);
  });
};

exports.createCourse = (req, res) => {
  const newCourse = req.body;
  Course.create(newCourse, (error, result) => {
    if (error) return console.error(error.message);
    res
      .status(201)
      .send(`The course was created with the ID: ${result.insertId}`);
  });
};

exports.updateCourse = (req, res) => {
  const { id } = req.params;
  const updateCourse = req.body;
  Course.update(id, updatedCourse, (error) => {
    if (error) return console.error(error.message);
    res.send("Course updated");
  });
};

exports.deleteCourse = (req, res) => {
  const { id } = req.params;
  Course.delete(id, (error) => {
    if (error) return console.error(error.message);
    res.send("Course deleted");
  });
};
