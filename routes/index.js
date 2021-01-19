const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth');

//Landing Page
router.get('/', (req, res)=> res.render('landingPage'));

//HomePage
router.get('/home',ensureAuthenticated, (req, res)=> 
        res.render('homePage',{
            name: req.user.name
}));

//Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res)=> 
        res.render('dashboard',{
            name: req.user.name
}));

module.exports = router;