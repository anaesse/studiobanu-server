const asyncHandler = require('express-async-handler')
const Genre = require('../models/genreModel')


exports.addGenre = asyncHandler(async(req, res) => { 
    const genre = new Genre({...req.body}) 
    await genre.save();
    
    res.status(201).send(genre)
})

exports.updateGenre = asyncHandler(async(req, res) => { 
    const {id} = req.params;
    const genre = await Genre.findOneAndUpdate({_id: id}, {...req.body})
    res.status(204).send(genre)
})

exports.deleteGenre = asyncHandler(async(req, res) => { 
    const {id} = req.params;
    const genre = await Genre.findOneAndDelete({_id: id})
    
    res.status(200).send(genre)
}) 


exports.findGenre = asyncHandler(async(req, res) => { 
    const genre = await Genre.find()
    res.status(200).send(genre)
}) 

exports.findOneGenre = asyncHandler(async(req, res) => { 
    const {id} = req.params;
    const genre = await Genre.findOne({_id: id})
    
    res.status(200).send(genre)
})
