const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')
const passport = require('passport')

const formSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'This field is required']
    },
    password: {
        type: String
    }
},  
{
    timestamps: true,
})

formSchema.plugin(passportLocalMongoose);


const formModel = mongoose.model('Form', formSchema);


module.exports = formModel;