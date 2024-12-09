const jwt = require('jsonwebtoken');
const User = require('../models/User');

const SECRET_KEY = "a98b6f16fc94fa4441e80946e59c2215d37ff18f311f6d31edf4c1b3abf245cec0bfa7b6bde422af603773f50c7372a20fa689124f6e10a6c5d9e8ed89dcd735"; 

const generateToken = (user) => {
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email
    };

    const options = {
        expiresIn: '3h'
    };

    const token = jwt.sign(payload, SECRET_KEY, options);
    return token;
};
module.exports = { generateToken };
