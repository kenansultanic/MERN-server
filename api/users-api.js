const User = require('../models/user')

const users = {
    addNewUser: async (req, res, next) => {
        const user = new User({
            email: req.body.email,
            username: req.body.username,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            // TODO(Hash password)
            password: req.body.password,
            // TODO(ADD DEFAULT PFP URL)
            pfp_url: 'default'
        })
        try {
            const dataToSave = await user.save();
        }
        catch (err) {
            console.log(err)
        }
        next()
    },
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
