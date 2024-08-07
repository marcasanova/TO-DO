const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. No se proporcionó token.' });
    }

    try {
        const decoded = jwt.verify(token, 'secretKey'); // Usa la misma clave secreta que usaste para firmar el token
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token inválido.' });
    }
};

module.exports = authMiddleware;
