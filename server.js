const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const port = 8000
const app = express()

// listening on port 8000
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

//static files
app.use(express.static(__dirname + 'public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))
app.use('/webfonts', express.static(__dirname + 'public/webfonts'))

//set templete engine
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

//navigation
app.get('/',(req,res)=>{
    res.render('index')
})