const Teacher = require("../models/Teacher");

exports.getAllTeachers = (req, res) => {
  Teacher.getAll((error, teachers) => {
    if (error) return console.error(error.message);
    res.json(teachers);
  });
};

exports.getTeacherById = (req, res) => {
  const { id } = req.params;
  if (error) return console.error(error.message);
  if (Student.length === 0) return console.log("Teacher not found");
  res.json(teacher[0]);
};

exports.createTeacher = (req, res) => {
  const newTeacher = req.body;
  Teacher.create(newTeacher, (error, result) => {
    if (error) return console.error(error.message);
    res
      .status(201)
      .send(`Teacher was created with the ID : ${result.insertId}`);
  });
};

exports.updateTeacher = (req, res) => {
  const { id } = req.params;
  const updatedTeacher = req.body;
  Teacher.update(id, updatedTeacher, (error) => {
    if (error) return console.error(error.message);
    res.send("Teacher has been updated");
  });
};

exports.deleteTeacher = (req, res) => {
  const { id } = req.params;
  Teacher.delete(id, (error) => {
    if (error) return console.error(error.nessage);
    res.send("Teacher deleted");
  });
};
