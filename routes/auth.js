const express = require('express');
const User = require('../models/User');
const router = express.Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    res.render('auth/login');
})
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {

    res.redirect('/products');
})

router.post('/register', async (req, res) => {
    let { username, email, password } = req.body;
    const user = new User({ username, email });
    const newuser = await User.register(user, password);
    res.redirect('/login');
})
router.get('/register', (req, res) => {
    res.render('auth/signup');
})

router.get('/logout', (req, res) => {
    res.redirect('/products');
})

module.exports = router;