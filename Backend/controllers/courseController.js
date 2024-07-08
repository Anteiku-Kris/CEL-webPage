const connection = require("../config/database");
const Course = require('../models/Course')

exports.getCourses = (req, res) => {
  const query = "SELECT * FROM courses";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.status(200).json(results);
  });
};

exports.getCourseById = (req, res) => {
  const courseId = req.params.id;
  const query = "SELECT * FROM courses WHERE id = ?";
  connection.query(query, [courseId], (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.status(200).json(results[0]);
  });
};

exports.createCourse = async (req, res) => {
  const { name, level, language, status, schedule } = req.body;
  try {
    const newCourse = await Course.create({
      name,
      level,
      language,
      status,
      schedule
    });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateCourse = (req, res) => {
  const courseId = req.params.id;
  const { name, level, language, status, schedule } = req.body;
  const query =
    "UPDATE courses SET name = ?, level = ?, language = ?, status = ?, schedule = ? WHERE id = ?";
  connection.query(
    query,
    [name, level, language, status, schedule, courseId],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error });
      }
      res.status(200).json({ id: courseId, name, level, language, status, schedule });
    }
  );
};

exports.deleteCourse = (req, res) => {
  const courseId = req.params.id;
  const query = "DELETE FROM courses WHERE id = ?";
  connection.query(query, [courseId], (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.status(204).json();
  });
};
