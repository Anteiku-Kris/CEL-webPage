const Teacher = require("../models/Teacher");
const connection = require("../config/database");

exports.getAllTeachers = (req, res) => {
  Teacher.getAll((error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json(results);
  });
};

exports.getTeacherById = (req, res) => {
  const { id } = req.params;
  Teacher.getById(id, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.status(200).json(results[0]);
  });
};

exports.createTeacher = (req, res) => {
  const { name, email, courses } = req.body;
  const newTeacher = { name, email, courses: JSON.stringify(courses) };
  Teacher.create(newTeacher, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(201).json({ id: results.insertId, ...newTeacher });
  });
};

exports.updateTeacher = (req, res) => {
  const { id } = req.params;
  const { name, email, courses } = req.body;
  const updatedTeacher = { name, email, courses: JSON.stringify(courses) };

  Teacher.update(id, updatedTeacher, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.status(200).json({ id, ...updatedTeacher });
  });
};

exports.deleteTeacher = (req, res) => {
  const { id } = req.params;
  Teacher.delete(id, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.status(204).json();
  });
};
