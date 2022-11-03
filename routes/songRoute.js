const express = require('express')
const router = express.Router()
const songController = require('../controller/songsController')

router.get('/allSongs', songController.findSong)
router.post('/addSong', songController.addSong)
router.get('/findOne/:id', songController.findOneSong)
router.post('/updateSong/:id', songController.updateSong)
router.delete('/deleteSong/:id', songController.deleteSong)




module.exports = router