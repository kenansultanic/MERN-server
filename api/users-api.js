const User = require('../models/user')
const bcrypt = require('bcrypt')
const saltRounds = 10;

const users = {
    addNewUser: async (req, res, next) => {
        const pass = req.body.password
        bcrypt.hash(pass,saltRounds, async (err,hash) => {
            const user = new User({
                email: req.body.email,
                username: req.body.username,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                password: hash,
                pfp_url: `https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80`
            })
            try {
                const dataToSave = await user.save();
            }
            catch (err) {
                console.log(err)
            }
            next()
        
        })},

    getAllUsers: async (req, res, next) => {
        try {
            req.users  = await User.find()
        }
        catch(err) {
            console.log(err)
        }
        next()
    },
    getUserByUsername: async (req, res, next) => {
        try {
            req.user = await User.find({username: req.body.username})
        }
        catch(err) {
            console.log(err)
        }
        next()
    },
    getUserByEmail: async (req, res, next) => {
        try {
            req.user = await User.find({email: req.body.email})
        }
        catch(err) {
            console.log(err)
        }
        next()
    } 
}

module.exports = users