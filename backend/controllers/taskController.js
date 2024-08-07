const Task = require('../models/taskModel');

// Crear una nueva tarea
exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    const userId = req.user.id; // Asumiendo que req.user está configurado por el middleware de autenticación

    try {
        const newTask = new Task({ userId, title, description });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la tarea', error });
    }
};

// Obtener todas las tareas de un usuario
exports.getTasks = async (req, res) => {
    const userId = req.user.id;

    try {
        const tasks = await Task.find({ userId });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las tareas', error });
    }
};

// Actualizar una tarea
exports.updateTask = async (req, res) => {
    const { taskId, title, description, status } = req.body;
    const userId = req.user.id;

    try {
        const task = await Task.findOneAndUpdate(
            { _id: taskId, userId },
            { title, description, status, updatedAt: Date.now() },
            { new: true }
        );

        if (!task) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la tarea', error });
    }
};

// Eliminar una tarea
exports.deleteTask = async (req, res) => {
    const { taskId } = req.params;
    const userId = req.user.id;

    try {
        const task = await Task.findOneAndDelete({ _id: taskId, userId });

        if (!task) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }

        res.status(200).json({ message: 'Tarea eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la tarea', error });
    }
};
