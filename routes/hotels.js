const express = require('express');
const router = express.Router();
//const {ensureAuthenticated,notLoggedIn} = require('../config/auth');
const Hotel = require('../models/Hotel.model');


router.get('/:id', (req,res, next)=>{
    console.log('in route',req.params.id);
    Hotel.findById(req.params.id, (err,data)=>{
        res.render('landingPage',{
            layout:false,
                    value: data 
        })
    })
    
});

//Single Hotel View
router.get('/hotel/:id', (req,res,next)=>{
    Hotel.findById(req.params.id, (err,data)=>{
        res.render()
    })
});

//Booking Form
router.get('/booking/:id', (req,res,next)=>{
      Hotel.findById(req.params.id, (err,data)=>{
          res.render()
    })

});

//Get the wish list 
router.get('/wishlist', (req,res,next)=>{
    //from session
})

//Add to Wish List 
router.post('/addList/:id', (req,res,next)=>{
      Hotel.findById(req.params.id, (err,data)=>{
          res.render()
    })

});


module.exports = router