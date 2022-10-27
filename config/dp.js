const mongoose = require('mongoose')
const mongoUrl = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@studio-bantu.lcnhckl.mongodb.net/?retryWrites=true&w=majority`

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(mongoUrl)

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error){
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB