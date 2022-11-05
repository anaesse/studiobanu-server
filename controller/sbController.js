const asyncHandler = require('express-async-handler')
const songModel = require('../models/songsModel')
const axios = require('axios')



const studioBantu = require('../models/formModel')
const mongoose = require('mongoose')
const Genre = require('../models/genreModel')
//desc Get Home Page
//route GET /
//access private
const getHome = asyncHandler(  async(req, res) => {   
    const trendingSongs = await songModel.find().sort({"noOfPlays": -1})
    const newRelease = await songModel.find().sort({"createdAt": 1}).limit(1) 
    
    console.log(trendingSongs);
    console.log(newRelease);
    
        res.status(200).render('index', {title : 'Home Page', trendingSongs, newRelease, isAuthenticated: req.isAuthenticated()})
    }
) 
//desc Get View all Page
//route GET /
//access private
const getViewAllSongs = asyncHandler(  async(req, res) => {   
    // const trendingSongs = await songModel.find().sort({"noOfPlays": -1})
    const newRelease = await songModel.find().sort({"createdAt": 1}) 
        res.status(200).render('all_songs', {title : 'View all Page', newRelease, isAuthenticated: req.isAuthenticated()})
    }
) 


const getLogin = asyncHandler(  async(req, res) => {   
        res.status(200).render('login', {title: 'Login Page'})
    }
) 
const getRegister = asyncHandler(  async(req, res) => {   
        res.status(200).render('register', {title: 'Register Page'})
    }
) 



const getCreate = asyncHandler( async(req, res) => {   
    const genre = await Genre.find({})
    res.render('create', {title: 'Create Page', genre, isAuthenticated: req.isAuthenticated()})
})
//desc Get About Page
//route GET /about
//access private
const getAbout = asyncHandler( async(req, res) => {
    res.render('about', {title: 'About Page'})
})

//desc Get Song Page
//route GET /songs
//access private
const getSongs =asyncHandler(async(req, res) => {
    const trendingSongs = await songModel.find().sort({"noOfPlays": -1})
    const newRelease = await songModel.find().sort({"createdAt": 1}).limit(8) 
    res.status(200).render('songs', {title : 'Discology/Song Page', trendingSongs, newRelease, isAuthenticated: req.isAuthenticated()})
})

const getEdit =asyncHandler(async(req, res) => {
    const {id} = req.params;
    const genre = await Genre.find({})
    const song = await songModel.findOne({_id: id})
    res.render('editpage', {title: 'Edit Page', song, genre})
})
const getDelete =asyncHandler(async(req, res) => {
    const {id} = req.params;
    const song = await songModel.findOneAndDelete({_id: id})
    res.redirect("/")
})

const setEdit =asyncHandler(async(req, res) => {
    
    res.render('editpage', {title: 'Edit Page'})
})

//desc Get Song_list Page
//route GET /song_list
//access private
const getSong_list = asyncHandler( async(req, res) => {
    res.render('song_list', {title: 'Discology/song_list Page'})
})

//desc Get Add_playlist Page
//route GET /add_playlist
//access private
const getAdd_playlist =asyncHandler(  async(req, res) => {
    res.render('add_playlist', {title: 'Playlist Page'})
})

//desc Get Genres Page
//route GET /genres
//access private
const getGenres = asyncHandler(  async(req, res) => {
    const newObj = []
    const genre = await Genre.find({})
    const songs = await songModel.find({})
    console.log(songs)

    for(let count = 0; count < genre.length; count++) {
        const newSongGenre = songs.filter(song => song.genres == genre[count].title);
        newObj.push({
            [genre[count].title]: newSongGenre
        })
    }

    res.render('genres', {title: 'Genres Page', categories: newObj})
})
//desc Get Genres_single Page
//route GET /genres_single
//access private
const getGenres_single = asyncHandler(  async(req, res) => {
    const newObj = []
    const genre = await Genre.find({})
    const songs = await songModel.find({})
    console.log(songs)

    for(let count = 0; count < genre.length; count++) {
        const newSongGenre = songs.filter(song => song.genres == genre[count].title);
        newObj.push({
            [genre[count].title]: newSongGenre
        })
    }

    res.render('genres_single', {title: 'View all Page', categories: newObj})
})

//desc Get Download Page
//route GET /download
//access private
const getDownload = asyncHandler( async(req, res)  => {
    const {id} = req.params;
    const song = await songModel.findOne({_id: id})

    console.log(song)

    res.render('download', {title: 'Download Page', song: song})
})

//desc Get History Page
//route GET /history
//access private
const getHistory= asyncHandler(async(req, res) => {
    res.render('history', {title: 'History Page'})
})

//desc Get Reuest_song Page
//route GET /request_song
//access private
const getRequest = asyncHandler(async(req, res)  => {
    res.render('request_song', {title: 'Request song Page'})
})

//desc Get contact Page
//route GET /contact
//access private
const getContact = asyncHandler( async(req, res) => {
    res.render('contact', {title: 'Contact Page'})
})
//desc set Home Page
//route POST /
//access private
const setHome = asyncHandler( async(req, res) => {
    if (req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    res.status(200).render('index', {title : 'Home Page'})
})

//desc Set About Page
//route POST /about
//access private
const setAbout = asyncHandler(async(req, res) => {
    if (req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    res.render('about', {title: 'About Page'})
})

//desc Set Song Page
//route POST /songs
//access private
const setSongs = asyncHandler( async(req, res) => {
    if (req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    res.render('songs', {title: 'Discology/song Page'})
})

//desc Set Song_list Page
//route POST /song_list
//access private
const setSong_list = asyncHandler( async(req, res) => {
    if (req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    res.render('song_list', {title: 'Discology/song_list Page'})
})

//desc set Add_playlist Page
//route POST /add_playlist
//access private
const setAdd_playlist = asyncHandler( async(req, res) => {
    if (req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    res.render('add_playlist', {title: 'Playlist Page'})
})

//desc Set Genres Page
//route POST /genres
//access private
const setGenres = asyncHandler( async(req, res) => {
    if (req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    res.render('genres', {title: 'Genres Page'})
})
 
//desc Set Genres_single Page
//route POST /genres_single
//access private
const setGenres_single = asyncHandler( async(req, res) => {
    if (req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    res.render('genres_single', {title: 'Genres_single Page'})
})

//desc Set Download Page
//route POST /download
//access private
const setDownload = asyncHandler( async(req, res)  => {
    if (req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    res.render('download', {title: 'Download Page'})
})

//desc Set History Page
//route POST /history
//access private
const setHistory= asyncHandler( async(req, res) => {
    if (req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    res.render('history', {title: 'History Page'})
})

const Logout = asyncHandler( async(req, res) => {
    const result = await axios.post("http://127.0.0.1:8000/logout")
    if(result.data.msg === 'succes') {
        res.redirect('/')
    } else {
        throw new Error()
    }
    
})

const LogoutP = asyncHandler( async(req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.send({msg: 'succes'});
      });  
})
//desc Set Reuest_song Page
//route POST /request_song
//access private
const setRequest = asyncHandler( async(req, res)  => {
    const {email, name, msg} = req.body;
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const mesg = {
    to: 'sophiesse143@gmail.com',
    from: email, // Use the email address or domain you verified above
    subject: 'Song Request',
    text: msg,
    // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    //ES6
    sgMail
    .send(mesg)
    .then(() => {
        res.redirect('/')
    }, error => {
        console.error(error);

        if (error.response) {
        console.error(error.response.body)
        }
    });
})

//desc Set contact Page
//route POST /contact
//access private
const setContact = asyncHandler( async(req, res)  => {
    const {first_name, last_name, email, sub, name, msg} = req.body;
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const mesg = {
    to: 'sophiesse143@gmail.com',
    from: email, // Use the email address or domain you verified above
    subject: sub,
    text: msg,
    // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    //ES6
    sgMail
    .send(mesg)
    .then(() => {
        res.redirect('/')
    }, error => {
        console.error(error);

        if (error.response) {
        console.error(error.response.body)
        }
    });
})

//desc Update Home Page
//route PUT /
//access private
const updateHome = asyncHandler( async(req, res) => {
    res.status(200).render('index', {title : 'Home Page'})
})

//desc Update About Page
//route PUT /about
//access private
const updateAbout = asyncHandler( async(req, res) => {
    res.render('about', {title: 'About Page'})
})

//desc Update Song Page
//route PUT /songs
//access private
const updateSongs = asyncHandler( async(req, res) => {
    res.render('songs', {title: 'Discology/song Page'})
})

//desc Update Song_list Page
//route PUT /song_list
//access private
const updateSong_list = asyncHandler( async(req, res) => {
    res.render('song_list', {title: 'Discology/song_list Page'})
})

//desc Update Add_playlist Page
//route PUT /add_playlist
//access private
const updateAdd_playlist = asyncHandler( async(req, res) => {
    res.render('add_playlist', {title: 'Playlist Page'})
})

//desc Update Genres Page
//route PUT /genres
//access private
const updateGenres = asyncHandler( async(req, res) => {
    res.render('genres', {title: 'Genres Page'})
})
 
//desc Update Genres_single Page
//route PUT /genres_single
//access private
const updateGenres_single = asyncHandler( async(req, res) => {
    res.render('genres_single', {title: 'Genres_single Page'})
})

//desc Update Download Page
//route PUT /download
//access private
const updateDownload = asyncHandler( async(req, res)  => {
    res.render('download', {title: 'Download Page'})
})

//desc Update History Page
//route PUT /history
//access private
const updateHistory= asyncHandler( async(req, res) => {
    res.render('history', {title: 'History Page'})
})

//desc Update Reuest_song Page
//route PUT /request_song
//access private
const updateRequest = asyncHandler( async(req, res)  => {
    res.render('request_song', {title: 'Request_song Page'})
})

//desc Update contact Page
//route PUT /contact
//access private
const updateContact = asyncHandler( async(req, res) => {
    res.render('contact', {title: 'Contact Page'})
})
//desc Delete Home Page
//route DELETE /
//access private
const deleteHome = asyncHandler( async(req, res) => {
    res.status(200).render('index', {title : 'Home Page'})
})

//desc Delete About Page
//route DELETE /about
//access private
const deleteAbout = asyncHandler( async(req, res) => {
    res.render('about', {title: 'About Page'})
})

//desc Delete Song Page
//route DELETE /songs
//access private
const deleteSongs = asyncHandler( async(req, res) => {
    res.render('songs', {title: 'Discology/song Page'})
})

//desc Delete Song_list Page
//route DELETE /song_list
//access private
const deleteSong_list = asyncHandler( async(req, res) => {
    res.render('song_list', {title: 'Discology/song_list Page'})
})

//desc Delete Add_playlist Page
//route DELETE /add_playlist
//access private
const deleteAdd_playlist = asyncHandler( async(req, res) => {
    res.render('add_playlist', {title: 'Playlist Page'})
})

//desc Delete Genres Page
//route DELETE /genres
//access private
const deleteGenres = asyncHandler( async(req, res) => {
    res.render('genres', {title: 'Genres Page'})
})
 
//desc Delete Genres_single Page
//route DELETE /genres_single
//access private
const deleteGenres_single = asyncHandler( async(req, res) => {
    res.render('genres_single', {title: 'Genres_single Page'})
})

//desc Delete Download Page
//route DELETE /download
//access private
const deleteDownload = asyncHandler( async(req, res)  => {
    res.render('download', {title: 'Download Page'})
})

//desc Delete History Page
//route DELETE /history
//access private
const deleteHistory= asyncHandler( async(req, res) => {
    res.render('history', {title: 'History Page'})
})

//desc Delete Reuest_song Page
//route DELETE /request_song
//access private
const deleteRequest = asyncHandler( async(req, res)  => {
    res.render('request_song', {title: 'Request_song Page'})
})

//desc Delete contact Page
//route DELETE /contact
//access private
const deleteContact = asyncHandler( async(req, res) => {
    res.render('contact', {title: 'Contact Page'})
})

module.exports = {
    getHome, getAbout, getSongs, getSong_list, getAdd_playlist, getGenres, getGenres_single, getDownload, getHistory, getRequest, getCreate, getEdit, getContact, getLogin,getRegister,getDelete,getViewAllSongs,
    setHome, setAbout, setSongs, setSong_list, setAdd_playlist, setGenres, setGenres_single, setDownload, setHistory, setRequest, setContact, setEdit, Logout, LogoutP,
    updateHome, updateAbout, updateSongs, updateSong_list, updateAdd_playlist, updateGenres, updateGenres_single, updateDownload, updateHistory, updateRequest, updateContact,
    deleteHome, deleteAbout, deleteSongs, deleteSong_list, deleteAdd_playlist, deleteGenres, deleteGenres_single, deleteDownload, deleteHistory, deleteRequest, deleteContact,
}