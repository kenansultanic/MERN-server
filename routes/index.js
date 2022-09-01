const express = require('express')
const router = express.Router()
const User = require('../models/user')

const users = require('../api/users-api')

router.get('/', users.getUserByUsername, (req, res) => {
    res.send(req.user)
})

module.exports = router