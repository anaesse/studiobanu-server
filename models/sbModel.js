const mongoose = require('mongoose')

const sbSchema = mongoose.Schema({
   text: {
       type: String,
       required: [true, 'please add a text value']
   } 
},
{
    timestamps: true,
}
    
)

module.exports = mongoose.model('studioBantu', sbSchema)