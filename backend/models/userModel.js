const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definición del esquema de usuario
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Crear el modelo de usuario
const User = mongoose.model('User', userSchema);

module.exports = User;
