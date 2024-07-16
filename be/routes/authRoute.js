const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/authController.js');



router.get('/test', (req, res) => {
    res.send('Auth route');
    }
);

router.post('/register', (req, res) => {
    res.send('Register route');
    }
);

router.post('/login', (req, res) => {
    res.send('Login route');
    }
);

router.post('/logout', (req, res) => {
    res.send('Logout route');
    }
);


module.exports = router;