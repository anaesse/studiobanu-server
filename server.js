const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const port = 8000
const app = express()

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
app.get('', (req, res) => {
    res.render('index', {title : 'Home Page'})
})
app.get('/about', (req, res) => {
    res.render('about', {layout: './layouts/full-width',
                         title: 'About Page'})
})
app.get('/songs', (req, res) => {
    res.render('songs', {layout: './layouts/full-width',
                         title: 'Discology/song Page'})
})
app.get('/song_list', (req, res) => {
    res.render('song_list', {layout: './layouts/full-width',
                              title: 'Discology/song_list Page'})
})
app.get('/add_playlist', (req, res) => {
    res.render('add_playlist', {layout: './layouts/full-width',
                                title: 'Playlist Page'})
})
app.get('/genres', (req, res) => {
    res.render('genres', {layout: './layouts/full-width',
                           title: 'Genres Page'})
})
app.get('/genres_single', (req, res) => {
    res.render('genres_single', {layout: './layouts/full-width',
                                 title: 'Genres_single Page'})
})
app.get('/download', (req, res) => {
    res.render('download', {layout: './layouts/full-width',
                            title: 'Download Page'})
})
app.get('/history', (req, res) => {
    res.render('history', {layout: './layouts/full-width',
                           title: 'History Page'})
})
app.get('/request_song', (req, res) => {
    res.render('request_song', {layout: './layouts/full-width',
                                title: 'Request_song Page'})
})
app.get('/contact', (req, res) => {
    res.render('contact', {layout: './layouts/full-width',
                            title: 'Contact Page'})
})
