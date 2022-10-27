require('dotenv').config()
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/dp')
const port = process.env.PORT || 8000
connectDB()

const app = express()


//Handlers
app.use(express.json())
app.use(express.urlencoded({
    extended : false
}))
app.use(errorHandler)


// listening on port 8000
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))
app.use('/webfonts', express.static(__dirname + 'public/webfonts'))

//set templete engine
app.use(expressLayouts)
app.set('layout', './layouts/home-templete')
app.set('view engine', 'ejs')

//navigation
app.use('/', require('./routes/sbRoute'))
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
