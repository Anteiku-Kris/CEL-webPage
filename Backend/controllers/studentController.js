const Student = require("../models/Student");

exports.getAllStudents = (req, res) => {
  Student.getAll((error, students) => {
    if (error) return console.error(error.message);
    res.json(students);
  });
};

exports.getStudentById = (req, res) => {
    const {id} =req.params;
    Student.getById(id, (error,student)=>{
        if(error) return console.error(error.message);
        if(student.length === 0) return console.log('Student not found')
        res.json(student[0]);
    })
};

exports.createStudent = (req, res) => {
  const newStudent = req.body;
  Student.create(newStudent, (error, result) => {
    if (error) return console.error(error.message);
    res.status(201).send(`Student was created with the ID: ${result.insertId}`);
  });
};

exports.updateStudent = (req, res) => {
  const { id } = req.params;
  const updatedStudent = req.body;
  Student.update(id, updatedStudent, (error) => {
    if (error) return console.error(error.message);
    res.send("Studen has been updated");
  });
};

exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  Student.delete(id, (error) => {
    if (error) return console.error(error.message);
    res.send("Student deleted");
  });
};
