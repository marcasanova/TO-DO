const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rutas de tareas
router.post('/create', authMiddleware, taskController.createTask);
router.get('/', authMiddleware, taskController.getTasks);
router.put('/update', authMiddleware, taskController.updateTask);
router.delete('/delete/:taskId', authMiddleware, taskController.deleteTask);

module.exports = router;
