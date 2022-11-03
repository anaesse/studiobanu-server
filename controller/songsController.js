const asyncHandler = require('express-async-handler')
const songModel = require('../models/songsModel')
const { cloudinary } = require('../utils/cloudinary')

//desc Get Home Page
//route GET /
//access private
exports.addSong = async(req, res) => { 
    const {title, genre, lyrics} = req.body
    const {mp3, images} = req.files;

    const uploadImage = await cloudinary.uploader.upload(images.tempFilePath, {
        public_id: Date.now().toString()
    })

    
    const uploadMp3 = await cloudinary.uploader.upload(mp3.tempFilePath, {
        public_id: Date.now().toString(),
        resource_type: 'auto'
    })

    const song = new songModel({
        title,
        genres:genre,
        lyrics,
        song: uploadMp3.secure_url,
        image: uploadImage.secure_url
    }) 
    await song.save();
    res.redirect('/create')
    // res.status(201).send(song)

    // console.log(goal); 
        // res.status(200).render(goal, {title : 'Home Page'})
    }

exports.updateSong = asyncHandler(  async(req, res) => { 
    const {id} = req.params;
    const {mp3, images} = req.files;
    if(Object.keys(req.files.images).length > 0) {
        const uploadImage = await cloudinary.uploader.upload(images.tempFilePath, {
            public_id: Date.now().toString()
        })
        const song = await songModel.findOneAndUpdate({_id: id}, {image: uploadImage.secure_url})
    }

    if(Object.keys(req.files.mp3).length > 0) {
        const uploadMp3 = await cloudinary.uploader.upload(mp3.tempFilePath, {
            public_id: Date.now().toString(),
            resource_type: 'auto'
        })

        const song = await songModel.findOneAndUpdate({_id: id}, {song: uploadMp3.secure_url})
    }
    const song = await songModel.findOneAndUpdate({_id: id}, {...req.body})

    res.redirect('/')
    // res.status(204).send(song)
    // console.log(goal); 
        // res.status(200).render(goal, {title : 'Home Page'})
    }
) 
exports.deleteSong = asyncHandler(  async(req, res) => { 
    const {id} = req.params;
    const song = await songModel.findOneAndDelete({_id: id})
    
    res.status(200).send(song)
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
