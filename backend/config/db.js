const mongoose = require('mongoose');

// URL de conexión a MongoDB (puede ser una URL local o de MongoDB Atlas)
const mongoURI = 'mongodb://localhost:27017/todo-list/users';

// Conectar a MongoDB
mongoose.connect(mongoURI, options)
    .then(() => {
        console.log('Conectado a MongoDB');
    })
    .catch((err) => {
        console.error('Error al conectar a MongoDB', err);
    });

module.exports = mongoose;