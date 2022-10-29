const express = require('express')
const router = express.Router()
const songController = require('../controller/songsController')

router.get('/allSongs', songController.findSong)
router.post('/addSong', songController.addSong)
router.post('/findOne/:id', songController.findOneSong)
router.patch('/updateSong/:id', songController.updateSong)
router.delete('/deleteSong/:id', songController.deleteSong)




module.exports = router