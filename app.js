const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const mongoose = require('mongoose');
const morgan = require('morgan');

require('console-stamp')(console, '[HH:MM:ss.l]');


const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/src/views'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('src/public'));
app.use(session({secret: 'foobar', resave: false, saveUninitialized: true}));
app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
});
app.use(flash());
app.use(morgan('combined'));

//MongoDB setup
mongoose.connect('mongodb://localhost:27017/feedback_loop', {useNewUrlParser: true, useFindAndModify: false})
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
global.db = mongoose.connection;

global.db.on('error', console.error.bind(console, 'connection error: '));

global.db.on('open', function() {
    console.log('Mongoose connection opened');
});

//routes
const feedbackRoutes = require('./src/js/feedback/feedbackRoutes');
const successRoutes = require('./src/js/success/successRoutes');

app.use('/', feedbackRoutes);
app.use('/success', successRoutes);

app.listen(3000, () => {
    console.log('Listening on port ' + 3000);
});