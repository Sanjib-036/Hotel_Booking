const express = require('express');
const router = express.Router();
const {ensureAuthenticated,notLoggedIn} = require('../config/auth');
const Hotel = require('../models/Hotel.model');
const Booking = require('../models/Booking.Model');
var Wishlist = require('../models/Wishlist.model');


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

//Booking
router.get('/booking/:id', (req,res,next)=>{
    var hotelID = req.params.id;
    console.log('on click',hotelID);
    if(ensureAuthenticated){
        res.redirect('/users/bookingForm/'+req.params.id)
    }
    next()
});

//Booking Form Unauthenticated
router.get('/bookingForm/:id', (req,res,next)=>{
    var hotelId = req.params.id;
    console.log('un', hotelId);
    Hotel.findById(hotelId, (err, hotel)=>{
        if(err){
            res.redirect('/home');
        }
        res.render('bookingForm',{
            hotel : hotel
        });
    })
})

//Get the wish list 
router.get('/wishlist', (req,res,next)=>{
    
})

//Add to Wish List 
router.get('/addList/:id', (req,res,next)=>{
    var hotelId = req.params.id;
    var list = new Wishlist(req.session.list ? req.session.list : {});
      Hotel.findById(hotelId, (err,hotel)=>{
          if(err){
              return res.redirect('/');
          }
          list.add(hotel, hotel.id);
          req.session.list = list;
          console.log('wishlist: ', req.session.list);
          res.redirect('/home');
    })

});


module.exports = router