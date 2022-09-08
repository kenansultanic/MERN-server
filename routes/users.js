const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const saltRounds = 10


router.post('/new-user', async (req, res) => {

    const password = req.body.password
    bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) res.status({message: err.message})

        const user = new User({
            email: req.body.email,
            username: req.body.username,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: hash,
            pfp_url: process.env.DEFAULT_USER_PFP
        })
        try {
            const newUser = await user.save()
            res.status(200).json({user: newUser})
        }
        catch(err) {
            res.status(500).json({message: 'Error! User couldn\'t be saved'})
        }
    })
})

router.post('/login-user', async (req, res) => {
    const user = await User.find({username: req.body.username})
    if (user.length != 0) {
        bcrypt.compare(req.body.password,user[0].password,(error,response)=>{
            if(error) res.status({message: error.message})
            if(response) {
                res.status(200).json({message: "Login success"})
            }else{
                res.status(403).json({message: "Error! Wrong password"})
            }
        })
    }else{
        res.status(403).json({message: "Error! Wrong username"})
    }

})


module.exports = router