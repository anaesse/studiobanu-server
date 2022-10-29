const mongoose = require('mongoose')

const formSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'This field is required']
    },
    firstName: {
        type: String,
        required: [true, 'This field is required']
    },
    lastName: {
        type: String,
        required: [true, 'This field is required']
    },
    email: {
        type: String,
        required: [true, 'This field is required']
    },
    message: {
        type: String
    },
    subject: {
        type: String
    }
}, 
  
{
    timestamps: true,
}
    
)

module.exports = mongoose.model('Form', formSchema)