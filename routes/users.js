const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

//User Model

const User = require('../models/User.model');
const Hotel = require('../models/Hotel.model');
const { ensureAuthenticated, notLoggedIn } = require('../config/auth');


//Users Dashboard/Profile
router.get('/dashboard', ensureAuthenticated, (req, res)=> 
        res.render('dashboard',{
            name: req.user.name,
            email: req.user.email,
            
}));
//Authenticated User home
router.get('/home', ensureAuthenticated, (req,res,next)=>{
    Hotel.find({}, (err, data) => {
    var hotelChunks = [];
    var chunkSize = 3;
    for(let i = 0; i<data.length ; i+=chunkSize){
      hotelChunks.push(data.slice(i, i+chunkSize));
    }
    res.render('homePage', {
      hotels: hotelChunks,
      name: req.user.name,
      data: data
    });
  });
});

//Authenticated User Booking Form
//Booking Form Unauthenticated
router.get('/bookingForm/:id', ensureAuthenticated, (req,res,next)=>{
    var hotelId = req.params.id;
    console.log('auth', hotelId);
    Hotel.findById(hotelId, (err, hotel)=>{
        if(err){
            res.redirect('/users/home');
        }
        res.render('bookingForm',{
            hotel : hotel,
            name: req.user.name
        });
    })
})

//Logout Handle
router.get('/logout', ensureAuthenticated, (req,res)=>{
    req.logout();
    req.flash('success_msg','You are logged out');
    res.redirect('/');
});

//UnAuthenticated
router.use('/', notLoggedIn, (res,req,next)=>{
    next();
});

//Login Page
router.get('/login', (req, res)=> res.render('login', {layout: false}));

//Register Page
router.get('/register', (req, res)=> res.render('register', {layout:false}));


//Register/ Sign Up Handle
router.post('/register', (req,res)=>{
   const {name, email, password, password2} = req.body;

   let errors =[];

   //check required fields
   if(!name || !email || !password || !password2){
       errors.push({message: 'Please fill in all fields'});
   }

   if(password != password2){
       errors.push({message: 'Passwords do not match'});
   }

   if(password.length<6){
       errors.push({message: 'Passwords should be at least 6 characters'});
   }

   if(errors.length>0){
       res.render('register',{
           errors,
           name,
           email,
           password,
           password2,
           layout: false
       });

   }
   else{
       //Validation Passed
        User.findOne({email: email})
        .then(user => {
            if(user){
                errors.push({message: 'Email already in use'});
                //User exists
                 res.render('register',{
                     errors,
                    name,
                    email,
                    password,
                    password2,
                    layout:false
                 });
            } else {
                //Create new user 
                const newUser = new User({
                    name,
                    email,
                    password
                });
                //Hash Password
                bcrypt.genSalt(10, (err, salt)=>{
                    bcrypt.hash(newUser.password, salt, (err, hash)=>{
                        if(err) throw err;
                        //Set Password to Hash
                        newUser.password = hash;
                        //Save User
                        newUser.save()
                            .then(user=>{
                                req.flash('success_msg', 'Account Created Successfully, Please Sign In to Continue...');
                                res.redirect('/users/login');
                            })
                            .catch(err=> console.log(err));

                    } )
                } )
            }
        });
   }
})


//Login Handle
router.post('/login',(req,res,next)=>{
    var body = req.body;
    console.log(body);
    passport.authenticate('local',{
        successRedirect: '/users/home',
        failureRedirect: '/users/login',
        failureFlash: true
    }) (req,res,next);

});





module.exports = router;