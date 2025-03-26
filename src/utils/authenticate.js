const jwt = require('jsonwebtoken');

const authenticate = (roles = []) => {
    return (req, res, next) => {
        const authHeader = req.headers['authorization'];

        if (!authHeader) {
            return res.status(401).json({ message: 'Token no proporcionado' });
        }

        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.user = decoded;

            if (roles.length > 0 && !roles.includes(req.user.role)) {
                return res.status(403).json({ message: 'No tienes permiso para acceder a este recurso' });
            }

            next();
            
        } catch (error) {
            console.error('Error de verificación del token:', error);
            res.status(401).json({ message: 'Token inválido o expirado' });
        }
    };
};

module.exports = { authenticate };
