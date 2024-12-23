const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email
    };

    const options = {
        expiresIn: '3h'
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, options);
    return token;
};
module.exports = { generateToken };
