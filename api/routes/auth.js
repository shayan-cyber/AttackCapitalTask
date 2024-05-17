// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ message: 'Email already in use' });
        }

   
        const passwordHash = await bcrypt.hash(password, 10);


        const user = new User({ email, passwordHash });
        await user.save();

        res.status(201).send({ message: 'User created' });
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && await bcrypt.compare(password, user.passwordHash)) {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.send({ token });
        } else {
            res.status(401).send({ message: 'Invalid credentials' });
        }
    } catch (e) {
        res.status(500).send({ message: 'Internal server error' });
    }

});

module.exports = router;
