const asyncHandler = require('express-async-handler')
const { findOneAndUpdate } = require('../models/songsModel')
const songModel = require('../models/songsModel')
//desc Get Home Page
//route GET /
//access private
exports.addSong = asyncHandler(  async(req, res) => { 
    console.log(req.body)  
    const song = new songModel(req.body) 
    await song.save();
    res.status(201).send(song)

    // console.log(goal); 
        // res.status(200).render(goal, {title : 'Home Page'})
    }
) 


exports.updateSong = asyncHandler(  async(req, res) => { 
    const {id} = req.params;
    const song = await songModel.findOneAndUpdate({_id: id}, {...req.body})
    
    res.status(204).send(song)
    // console.log(goal); 
        // res.status(200).render(goal, {title : 'Home Page'})
    }
) 
exports.deleteSong = asyncHandler(  async(req, res) => { 
    const {id} = req.params;
    const song = await songModel.findOneAndDelete({_id: id}, {...req.body})
    
    res.status(204).send(song)
    // console.log(goal); 
        // res.status(200).render(goal, {title : 'Home Page'})
    }
) 


exports.findSong = asyncHandler(  async(req, res) => { 
    
    const songs = await songModel.find()
    
    res.status(200).send(songs)
    // console.log(goal); 
        // res.status(200).render(goal, {title : 'Home Page'})
    }
) 

exports.findOneSong = asyncHandler(  async(req, res) => { 
    const {id} = req.params;
    const songs = await songModel.findOne({_id: id})
    
    res.status(200).send(songs)
    // console.log(goal); 
        // res.status(200).render(goal, {title : 'Home Page'})
    }
)
