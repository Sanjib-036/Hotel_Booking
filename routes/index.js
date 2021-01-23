const express = require('express');
const router = express.Router();
//const {ensureAuthenticated,notLoggedIn} = require('../config/auth');
const Hotel = require('../models/Hotel.model');



// //UnAuthenticated
// router.use('/', notLoggedIn, (res,req,next)=>{
//     next();
// })

// router.get('/home', (req, res)=> 
//         res.render('homePage',{
//             name: 'User'
// }));
//Landing Page
router.get('/', (req, res)=> res.render('landingPage',{layout: false}));

//HomePage
router.get('/home', function (req, res, next) { 
  Hotel.find({}, (err, data) => {
    var hotelChunks = [];
    var chunkSize = 3;
    for(let i = 0; i<data.length ; i+=chunkSize){
      hotelChunks.push(data.slice(i, i+chunkSize));
    }
    res.render('homePage', {
      hotels: hotelChunks,
      data: data
    });
  });
});





//Dashboard
// router.get('/dashboard', ensureAuthenticated, (req, res)=> 
//         res.render('dashboard',{
//             name: req.user.name
// }));


module.exports = router;