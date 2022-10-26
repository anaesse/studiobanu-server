//desc Get Home Page
//route GET /
//access private
const getHome = (req, res) => {
    res.status(200).render('index', {title : 'Home Page'})
}

//desc Get About Page
//route GET /about
//access private
const getAbout = (req, res) => {
    res.render('about', {layout: './layouts/full-width',
                         title: 'About Page'})
}

//desc Get Song Page
//route GET /songs
//access private
const getSongs = (req, res) => {
    res.render('songs', {layout: './layouts/full-width',
                         title: 'Discology/song Page'})
}

//desc Get Song_list Page
//route GET /song_list
//access private
const getSong_list = (req, res) => {
    res.render('song_list', {layout: './layouts/full-width',
                              title: 'Discology/song_list Page'})
}

//desc Get Add_playlist Page
//route GET /add_playlist
//access private
const getAdd_playlist = (req, res) => {
    res.render('add_playlist', {layout: './layouts/full-width',
                                title: 'Playlist Page'})
}

//desc Get Genres Page
//route GET /genres
//access private
const getGenres = (req, res) => {
    res.render('genres', {layout: './layouts/full-width',
                           title: 'Genres Page'})
}
 
//desc Get Genres_single Page
//route GET /genres_single
//access private
const getGenres_single = (req, res) => {
    res.render('genres_single', {layout: './layouts/full-width',
                                 title: 'Genres_single Page'})
}

//desc Get Download Page
//route GET /download
//access private
const getDownload = (req, res)  => {
    res.render('download', {layout: './layouts/full-width',
                            title: 'Download Page'})
}

//desc Get History Page
//route GET /history
//access private
const getHistory= (req, res) => {
    res.render('history', {layout: './layouts/full-width',
                           title: 'History Page'})
}

//desc Get Reuest_song Page
//route GET /request_song
//access private
const getRequest = (req, res)  => {
    res.render('request_song', {layout: './layouts/full-width',
                                title: 'Request_song Page'})
}

//desc Get contact Page
//route GET /contact
//access private
const getContact = (req, res) => {
    res.render('contact', {layout: './layouts/full-width',
                            title: 'Contact Page'})
}

module.exports = {
    getHome, getAbout, getSongs, getSong_list, getAdd_playlist, getGenres, getGenres_single, getDownload, getHistory, getRequest, getContact,
}