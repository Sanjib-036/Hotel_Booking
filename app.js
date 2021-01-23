const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);

const app = express();

//Passport Config
require('./config/passport')(passport);

//DB Config 
const db = require('./config/keys').MongoURI;

//Body-parser
app.use(express.urlencoded({extended:false}));

//Connect
mongoose.connect(db, {useNewUrlParser:true,  useUnifiedTopology: true})
    .then(()=>console.log('MongoDB Connected'))
    .catch(err=> console.log('err',err));

//EJS
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


//Cookie Parser
app.use(cookieparser());

//Express Session
app.use(session({
  secret: 'secretKey',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  }),
  cookie: { maxAge: 180*10*1000}
}));

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
    res.locals.session = req.session;
    next();
});

//Routes
app.use('/users', require('./routes/users'));
app.use('/hotels/', require('./routes/hotels'));
app.use('/', require('./routes/index'));

const PORT = process.env.PORT||3000;

app.listen(PORT, console.log(`Server Running on port ${PORT}`));
