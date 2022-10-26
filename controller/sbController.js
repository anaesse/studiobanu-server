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
//desc set Home Page
//route POST /
//access private
const setHome = (req, res) => {
    res.status(200).render('index', {title : 'Home Page'})
}

//desc Set About Page
//route POST /about
//access private
const setAbout = (req, res) => {
    res.render('about', {layout: './layouts/full-width',
                         title: 'About Page'})
}

//desc Set Song Page
//route POST /songs
//access private
const setSongs = (req, res) => {
    res.render('songs', {layout: './layouts/full-width',
                         title: 'Discology/song Page'})
}

//desc Set Song_list Page
//route POST /song_list
//access private
const setSong_list = (req, res) => {
    res.render('song_list', {layout: './layouts/full-width',
                              title: 'Discology/song_list Page'})
}

//desc set Add_playlist Page
//route POST /add_playlist
//access private
const setAdd_playlist = (req, res) => {
    res.render('add_playlist', {layout: './layouts/full-width',
                                title: 'Playlist Page'})
}

//desc Set Genres Page
//route POST /genres
//access private
const setGenres = (req, res) => {
    res.render('genres', {layout: './layouts/full-width',
                           title: 'Genres Page'})
}
 
//desc Set Genres_single Page
//route POST /genres_single
//access private
const setGenres_single = (req, res) => {
    res.render('genres_single', {layout: './layouts/full-width',
                                 title: 'Genres_single Page'})
}

//desc Set Download Page
//route POST /download
//access private
const setDownload = (req, res)  => {
    res.render('download', {layout: './layouts/full-width',
                            title: 'Download Page'})
}

//desc Set History Page
//route POST /history
//access private
const setHistory= (req, res) => {
    res.render('history', {layout: './layouts/full-width',
                           title: 'History Page'})
}

//desc Set Reuest_song Page
//route POST /request_song
//access private
const setRequest = (req, res)  => {
    res.render('request_song', {layout: './layouts/full-width',
                                title: 'Request_song Page'})
}

//desc Set contact Page
//route POST /contact
//access private
const setContact = (req, res) => {
    res.render('contact', {layout: './layouts/full-width',
                            title: 'Contact Page'})
}

//desc Update Home Page
//route PUT /
//access private
const updateHome = (req, res) => {
    res.status(200).render('index', {title : 'Home Page'})
}

//desc Update About Page
//route PUT /about
//access private
const updateAbout = (req, res) => {
    res.render('about', {layout: './layouts/full-width',
                         title: 'About Page'})
}

//desc Update Song Page
//route PUT /songs
//access private
const updateSongs = (req, res) => {
    res.render('songs', {layout: './layouts/full-width',
                         title: 'Discology/song Page'})
}

//desc Update Song_list Page
//route PUT /song_list
//access private
const updateSong_list = (req, res) => {
    res.render('song_list', {layout: './layouts/full-width',
                              title: 'Discology/song_list Page'})
}

//desc Update Add_playlist Page
//route PUT /add_playlist
//access private
const updateAdd_playlist = (req, res) => {
    res.render('add_playlist', {layout: './layouts/full-width',
                                title: 'Playlist Page'})
}

//desc Update Genres Page
//route PUT /genres
//access private
const updateGenres = (req, res) => {
    res.render('genres', {layout: './layouts/full-width',
                           title: 'Genres Page'})
}
 
//desc Update Genres_single Page
//route PUT /genres_single
//access private
const updateGenres_single = (req, res) => {
    res.render('genres_single', {layout: './layouts/full-width',
                                 title: 'Genres_single Page'})
}

//desc Update Download Page
//route PUT /download
//access private
const updateDownload = (req, res)  => {
    res.render('download', {layout: './layouts/full-width',
                            title: 'Download Page'})
}

//desc Update History Page
//route PUT /history
//access private
const updateHistory= (req, res) => {
    res.render('history', {layout: './layouts/full-width',
                           title: 'History Page'})
}

//desc Update Reuest_song Page
//route PUT /request_song
//access private
const updateRequest = (req, res)  => {
    res.render('request_song', {layout: './layouts/full-width',
                                title: 'Request_song Page'})
}

//desc Update contact Page
//route PUT /contact
//access private
const updateContact = (req, res) => {
    res.render('contact', {layout: './layouts/full-width',
                            title: 'Contact Page'})
}
//desc Delete Home Page
//route DELETE /
//access private
const deleteHome = (req, res) => {
    res.status(200).render('index', {title : 'Home Page'})
}

//desc Delete About Page
//route DELETE /about
//access private
const deleteAbout = (req, res) => {
    res.render('about', {layout: './layouts/full-width',
                         title: 'About Page'})
}

//desc Delete Song Page
//route DELETE /songs
//access private
const deleteSongs = (req, res) => {
    res.render('songs', {layout: './layouts/full-width',
                         title: 'Discology/song Page'})
}

//desc Delete Song_list Page
//route DELETE /song_list
//access private
const deleteSong_list = (req, res) => {
    res.render('song_list', {layout: './layouts/full-width',
                              title: 'Discology/song_list Page'})
}

//desc Delete Add_playlist Page
//route DELETE /add_playlist
//access private
const deleteAdd_playlist = (req, res) => {
    res.render('add_playlist', {layout: './layouts/full-width',
                                title: 'Playlist Page'})
}

//desc Delete Genres Page
//route DELETE /genres
//access private
const deleteGenres = (req, res) => {
    res.render('genres', {layout: './layouts/full-width',
                           title: 'Genres Page'})
}
 
//desc Delete Genres_single Page
//route DELETE /genres_single
//access private
const deleteGenres_single = (req, res) => {
    res.render('genres_single', {layout: './layouts/full-width',
                                 title: 'Genres_single Page'})
}

//desc Delete Download Page
//route DELETE /download
//access private
const deleteDownload = (req, res)  => {
    res.render('download', {layout: './layouts/full-width',
                            title: 'Download Page'})
}

//desc Delete History Page
//route DELETE /history
//access private
const deleteHistory= (req, res) => {
    res.render('history', {layout: './layouts/full-width',
                           title: 'History Page'})
}

//desc Delete Reuest_song Page
//route DELETE /request_song
//access private
const deleteRequest = (req, res)  => {
    res.render('request_song', {layout: './layouts/full-width',
                                title: 'Request_song Page'})
}

//desc Delete contact Page
//route DELETE /contact
//access private
const deleteContact = (req, res) => {
    res.render('contact', {layout: './layouts/full-width',
                            title: 'Contact Page'})
}

module.exports = {
    getHome, getAbout, getSongs, getSong_list, getAdd_playlist, getGenres, getGenres_single, getDownload, getHistory, getRequest, getContact,
    setHome, setAbout, setSongs, setSong_list, setAdd_playlist, setGenres, setGenres_single, setDownload, setHistory, setRequest, setContact,
    updateHome, updateAbout, updateSongs, updateSong_list, updateAdd_playlist, updateGenres, updateGenres_single, updateDownload, updateHistory, updateRequest, updateContact,
    deleteHome, deleteAbout, deleteSongs, deleteSong_list, deleteAdd_playlist, deleteGenres, deleteGenres_single, deleteDownload, deleteHistory, deleteRequest, deleteContact,
}