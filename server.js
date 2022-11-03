require('dotenv').config()
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const {errorHandler} = require('./middleware/errorMiddleware')
const passport = require('passport')
const fileUpload = require('express-fileupload');
const session = require('express-session');
const bodyParser = require('body-parser')

const connectDB = require('./config/dp')
const port = process.env.PORT || 8000
connectDB()

const app = express()


//Handlers

app.use(express.json())
app.use(express.urlencoded({
    extended : false
}))
app.use(bodyParser.urlencoded({extended: true}))

app.use(fileUpload({
  useTempFiles : true,
}));
app.use(errorHandler)

app.use(session({
    secret: 'i love jesus',
    resave: true,
    saveUninitialized: false,
}))

app.use(passport.initialize())
app.use(passport.session())

const formModel =require('./models/formModel')
// passport.use(formModel.createStrategy())
// passport.serializeUser(formModel.serializeUser())
// passport.deserializeUser(formModel.deserializeUser())

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

app.use(express.static('public'));


//static files
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))
app.use('/webfonts', express.static(__dirname + 'public/webfonts'))

//set templete engine
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

//navigation
app.use('/', require('./routes/sbRoute'))
app.use('/editPage', require('./routes/sbRoute'))
app.use('/about', require('./routes/sbRoute'))
app.use('/songs', require('./routes/sbRoute'))
app.use('/song_list', require('./routes/sbRoute'))
app.use('/add_playlist', require('./routes/sbRoute'))
app.use('/genres', require('./routes/sbRoute'))
app.use('/genres_single', require('./routes/sbRoute'))
app.use('/download', require('./routes/sbRoute'))
app.use('/history', require('./routes/sbRoute'))
app.use('/request_song', require('./routes/sbRoute'))
app.use('/contact', require('./routes/sbRoute'))
app.use('/admin', require('./routes/songRoute'))
app.use('/auth', require('./routes/userRoute'))



// listening on port 8000
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})