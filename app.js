const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();

//Passport Config
require('./config/passport')(passport);

//DB Config 
const db = require('./config/keys').MongoURI;


//Connect
mongoose.connect(db, {useNewUrlParser:true,  useUnifiedTopology: true})
    .then(()=>console.log('MongoDB Connected'))
    .catch(err=> console.log('err',err));

//EJS
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


//Body-parser
app.use(express.urlencoded({extended:false}));

//Express Session
app.use(session({
  secret: 'secretKey',
  resave: true,
  saveUninitialized: true,
}))

//Passport MiddleWare
  app.use(passport.initialize());
  app.use(passport.session());

//Connect Flash
app.use(flash());

//Global variables
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.loggedIn = req.isAuthenticated();
    next();
} )

//Routes
app.use('/users', require('./routes/users'));
app.use('/', require('./routes/index'));

const PORT = process.env.PORT||3000;

app.listen(PORT, console.log(`Server Running on port ${PORT}`));
