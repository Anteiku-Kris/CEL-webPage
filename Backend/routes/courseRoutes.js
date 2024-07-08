const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/', courseController.getCourses);
router.get('/:id', courseController.getCourseById);
router.post('/', courseController.createCourse);
router.put('/:id', courseController.updateCourse); // Asegúrate de que esta ruta está correctamente configurada
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
