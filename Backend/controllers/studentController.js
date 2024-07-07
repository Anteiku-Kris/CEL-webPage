const Student = require("../models/Student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getAllStudents = (req, res) => {
  Student.getAll((error, students) => {
    if (error) return console.error(error.message);
    res.json(students);
  });
};

exports.getStudentById = (req, res) => {
  const { id } = req.params;
  Student.getById(id, (error, student) => {
    if (error) return console.error(error.message);
    if (student.length === 0) return res.status(404).json({ message: 'Student not found' });
    res.json(student[0]);
  });
};

exports.registerStudent = async (req, res) => {
  const { name, age, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newStudent = {
      name,
      age,
      email,
      password: hashedPassword,
      history: JSON.stringify([]),
      placement_test_passed: 0,
      created_at: new Date(),
      updated_at: new Date()
    };
    Student.create(newStudent, (error, result) => {
      if (error) return res.status(500).json({ error: error.message });
      res.status(201).json({ id: result.insertId, ...newStudent });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginStudent = (req, res) => {
  const { email, password } = req.body;
  Student.getByEmail(email, async (error, students) => {
    if (error) return res.status(500).json({ error: error.message });
    if (students.length === 0) return res.status(404).json({ message: 'Student not found' });

    const student = students[0];
    const passwordMatch = await bcrypt.compare(password, student.password);
    if (!passwordMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: student.id, email: student.email }, "SECRET_KEY", { expiresIn: '1h' });
    res.json({ token, student });
  });
};

exports.updateStudent = (req, res) => {
  const { id } = req.params;
  const updatedStudent = req.body;
  Student.update(id, updatedStudent, (error) => {
    if (error) return console.error(error.message);
    res.send("Student has been updated");
  });
};

exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  Student.delete(id, (error) => {
    if (error) return console.error(error.message);
    res.send("Student deleted");
  });
};
