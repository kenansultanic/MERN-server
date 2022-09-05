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


module.exports = router