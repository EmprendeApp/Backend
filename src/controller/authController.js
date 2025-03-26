const User = require('../models/User');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/jwt');

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });        
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado, registrate!', status: 0 });
        }

        const isMatch = bcrypt.compareSync(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta', status: 2 });
        }

        const token = generateToken(user);        
        res.status(200).json({ token, message: 'Bienvenido', status: 1, role: user.role, user });        
    } catch (error) {
        console.error("error", error);
        //res.status(500).json({ message: 'Server error' });
    }
};

const register = async (req, res) => {
    const { name, email, password, role } = req.body;
    console.log("Request Body:", req.body);

    try {

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email ya existe!' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        const token = generateToken(newUser);

        res.status(201).json({
            message: 'Cuenta registrada exitosamente',
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            },
            token,
            status: 1
        });
    } catch (error) {
        console.error("error", error);
        //res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { login, register };
