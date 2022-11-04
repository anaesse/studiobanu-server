const mongoose = require('mongoose')



const genreSchema = mongoose.Schema({
   title: {
       type: String,
       required: true,
       unique: true
   }
}, {
    timestamps : true
})

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;