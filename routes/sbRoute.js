const express = require('express')
const router = express.Router()
const {getHome, getAbout, getSongs, getEdit, getSong_list, getAdd_playlist, getGenres, getGenres_single, getDownload, getHistory, getRequest, getContact,getRegister, getCreate,
    setHome, setAbout, setSongs, setSong_list, setEdit, setAdd_playlist, setGenres, setGenres_single, setDownload, setHistory, setRequest, setContact, getLogin, getDelete, Logout, LogoutP,
    updateHome, updateAbout, updateSongs, updateSong_list, updateAdd_playlist, updateGenres, updateGenres_single, updateDownload, updateHistory, updateRequest, updateContact,
    deleteHome, deleteAbout, deleteSongs, deleteSong_list, deleteAdd_playlist, deleteGenres, deleteGenres_single, deleteDownload, deleteHistory, deleteRequest, deleteContact} = require('../controller/sbController')

//navigation

//Get / Post request
router.route('/').get(getHome).post(setHome)
router.route('/logout').get(Logout).post(LogoutP)
router.route('/create').get(getCreate)
router.route('/about').get(getAbout).post(setAbout)
router.route('/songs').get(getSongs).post(setSongs)
router.route('/songs_list').get(getSong_list).post(setSong_list)
router.route('/add_playlist').get(getAdd_playlist).post(setAdd_playlist)
router.route('/genres').get(getGenres).post(setGenres)
router.route('/genres_single').get(getGenres_single).post(setGenres_single)
// router.route('/download').get(getDownload).post(setDownload)
router.route('/history').get(getHistory).post(setHistory)
router.route('/request_song').get(getRequest).post(setRequest)
router.route('/contact').get(getContact).post(setContact)
router.route('/register').get(getRegister)
router.route('/login').get(getLogin)
//Update / Delete request
// router.route('/:id').put(getHome).delete(setHome)
router.route('/about/:id').put(getAbout).delete(setAbout)
router.route('/songs/:id').put(getSongs).delete(setSongs)
router.route('/songs_list/:id').put(getSong_list).delete(setSong_list)
router.route('/add_playlist/:id').put(getAdd_playlist).delete(setAdd_playlist)
router.route('/genres/:id').put(getGenres).delete(setGenres)
router.route('/genres_single/:id').put(getGenres_single).delete(setGenres_single)
router.route('/download/:id').put(getDownload).delete(setDownload)
router.route('/history/:id').put(getHistory).delete(setHistory)
router.route('/request_song/:id').put(getRequest).delete(setRequest)
router.route('/contact/:id').put(getContact).delete(setContact)
router.route('/editPage/:id').get(getEdit).post(setEdit)
router.route('/deletePage/:id').get(getDelete)
router.route('/:id').get(getDownload)


module.exports = router