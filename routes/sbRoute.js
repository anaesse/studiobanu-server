const express = require('express')
const router = express.Router()
const {getHome, getAbout, getSongs, getSong_list, getAdd_playlist, getGenres, getGenres_single, getDownload, getHistory, getRequest, getContact} = require('../controller/sbController')

//navigation

//Get request

router.get('/', getHome)
router.get('/about', getAbout)
router.get('/songs', getSongs)
router.get('/song_list', getSong_list)
router.get('/add_playlist', getAdd_playlist)
router.get('/genres', getGenres)
router.get('/genres_single', getGenres_single)
router.get('/download', getDownload)
router.get('/history', getHistory)
router.get('/request_song', getRequest)
router.get('/contact', getContact)

//Send request

router.post('/', (req, res) => {
    res.status(200).render('index', {title : 'Home Page'})
})
router.post('/about', (req, res) => {
    res.render('about', {layout: './layouts/full-width',
                         title: 'About Page'})
})
router.post('/songs', (req, res) => {
    res.render('songs', {layout: './layouts/full-width',
                         title: 'Discology/song Page'})
})
router.post('/song_list', (req, res) => {
    res.render('song_list', {layout: './layouts/full-width',
                              title: 'Discology/song_list Page'})
})
router.post('/add_playlist', (req, res) => {
    res.render('add_playlist', {layout: './layouts/full-width',
                                title: 'Playlist Page'})
})
router.post('/genres', (req, res) => {
    res.render('genres', {layout: './layouts/full-width',
                           title: 'Genres Page'})
})
router.post('/genres_single', (req, res) => {
    res.render('genres_single', {layout: './layouts/full-width',
                                 title: 'Genres_single Page'})
})
router.post('/download', (req, res) => {
    res.render('download', {layout: './layouts/full-width',
                            title: 'Download Page'})
})
router.post('/history', (req, res) => {
    res.render('history', {layout: './layouts/full-width',
                           title: 'History Page'})
})
router.post('/request_song', (req, res) => {
    res.render('request_song', {layout: './layouts/full-width',
                                title: 'Request_song Page'})
})
router.post('/contact', (req, res) => {
    res.render('contact', {layout: './layouts/full-width',
                            title: 'Contact Page'})
})

//Update request

router.put('/:id', (req, res) => {
    res.status(200).render('index', {title : 'Home Page'})
})
router.put('/about:id', (req, res) => {
    res.render('about', {layout: './layouts/full-width',
                         title: 'About Page'})
})
router.put('/songs:id', (req, res) => {
    res.render('songs', {layout: './layouts/full-width',
                         title: 'Discology/song Page'})
})
router.put('/song_list:id', (req, res) => {
    res.render('song_list', {layout: './layouts/full-width',
                              title: 'Discology/song_list Page'})
})
router.put('/add_playlist:id', (req, res) => {
    res.render('add_playlist', {layout: './layouts/full-width',
                                title: 'Playlist Page'})
})
router.put('/genres:id', (req, res) => {
    res.render('genres', {layout: './layouts/full-width',
                           title: 'Genres Page'})
})
router.put('/genres_single:id', (req, res) => {
    res.render('genres_single', {layout: './layouts/full-width',
                                 title: 'Genres_single Page'})
})
router.put('/download:id', (req, res) => {
    res.render('download', {layout: './layouts/full-width',
                            title: 'Download Page'})
})
router.put('/history:id', (req, res) => {
    res.render('history', {layout: './layouts/full-width',
                           title: 'History Page'})
})
router.put('/request_song:id', (req, res) => {
    res.render('request_song', {layout: './layouts/full-width',
                                title: 'Request_song Page'})
})
router.put('/contact:id', (req, res) => {
    res.render('contact', {layout: './layouts/full-width',
                            title: 'Contact Page'})
})

//Delete request

router.delete('/:id', (req, res) => {
    res.status(200).render('index', {title : 'Home Page'})
})
router.delete('/about:id', (req, res) => {
    res.render('about', {layout: './layouts/full-width',
                         title: 'About Page'})
})
router.delete('/songs:id', (req, res) => {
    res.render('songs', {layout: './layouts/full-width',
                         title: 'Discology/song Page'})
})
router.delete('/song_list:id', (req, res) => {
    res.render('song_list', {layout: './layouts/full-width',
                              title: 'Discology/song_list Page'})
})
router.delete('/add_playlist:id', (req, res) => {
    res.render('add_playlist', {layout: './layouts/full-width',
                                title: 'Playlist Page'})
})
router.delete('/genres:id', (req, res) => {
    res.render('genres', {layout: './layouts/full-width',
                           title: 'Genres Page'})
})
router.delete('/genres_single:id', (req, res) => {
    res.render('genres_single', {layout: './layouts/full-width',
                                 title: 'Genres_single Page'})
})
router.delete('/download:id', (req, res) => {
    res.render('download', {layout: './layouts/full-width',
                            title: 'Download Page'})
})
router.delete('/history:id', (req, res) => {
    res.render('history', {layout: './layouts/full-width',
                           title: 'History Page'})
})
router.delete('/request_song:id', (req, res) => {
    res.render('request_song', {layout: './layouts/full-width',
                                title: 'Request_song Page'})
})
router.delete('/contact:id', (req, res) => {
    res.render('contact', {layout: './layouts/full-width',
                            title: 'Contact Page'})
})


module.exports = router