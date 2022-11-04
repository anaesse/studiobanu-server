const express = require('express')
const router = express.Router()
const genreController = require('../controller/genreController')

router.get('/allGenre', genreController.findGenre)
router.post('/addGenre', genreController.addGenre)
router.get('/findGenre/:id', genreController.findOneGenre)
router.post('/updateGenre/:id', genreController.updateGenre)
router.delete('/deleteGenre/:id', genreController.deleteGenre)




module.exports = router