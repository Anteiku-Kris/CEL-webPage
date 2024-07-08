const express = require("express");
const studentController = require("../controllers/studentController");
const router = express.Router();

router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);
router.post("/register", studentController.registerStudent);
router.post("/login", studentController.loginStudent)

module.exports = router;
