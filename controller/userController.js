const asyncHandler = require('express-async-handler')
const formModel = require('../models/formModel')
const passport = require('passport')
//desc Get Home Page
//route GET /
//access private
exports.register = asyncHandler(async(req, res) => { 

    formModel.register({username: req.body.email }, req.body.password,(err, success) => {
        if(err) {
            console.log(err)
        } else {
            passport.authenticate("local")(req, res, () => {
                res.redirect('/');
            })
        }
    })   
}) 

exports.login = (req, res) => { 


    const user = new formModel({
        username: req.body.email,
        password: req.body.password
    })

    req.login(user,(err) => {
        if(err) {
            console.log(err)
        } else {
            passport.authenticate("local")(req, res, () => {
                res.redirect('/');
            })
        }
    })     
}

exports.getUsers = asyncHandler(async(req, res) => { 
    const users = await formModel.find();
    res.status(200).send(users)
}) 