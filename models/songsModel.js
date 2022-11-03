const mongoose = require('mongoose')



const songSchema = mongoose.Schema({
    image: {
        type: String,
        required: [true, 'This field is required']
    },
    title: {
        type: String
    },
    noOfPlays: {
        type: Number,
        default: 0,
    },
    song: {
        type: String
    },
    lyrics:{
        type: String
    },
    genres:{
        type: String
    }
}, {
    timestamps : true
})

const Song = mongoose.model('Song', songSchema);

module.exports = Song;