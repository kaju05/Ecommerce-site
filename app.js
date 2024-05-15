const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const seedDB = require('./seed');
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const authRoutes = require('./routes/auth');
const session = require('express-session');
const flash = require('connect-flash');
const User = require('./models/User');


const passport = require('passport');
const LocalStrategy = require('passport-local');


app.use(flash());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 7 * 1000 * 24 * 3600,
        maxAge: 7 * 1000 * 24 * 3600
    }
}))

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

const methodOverride = require('method-override');

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));



const bodyParser = require('body-parser');
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')
    .then(() => {
        console.log('DB connected');
    })
    .catch((err) => {
        console.log('sorry some error occured')
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);

// seedDB();

app.engine('ejs', ejsMate);

app.listen(8080, () => {
    console.log('server connected at port 8080');
})