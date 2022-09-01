const express = require('express')
const router = express.Router()
const users = require('../api/users-api')



router.post('/register',users.addNewUser,(req,res) => { })

//This below is for the test 
/*
    router.get('/all',users.getAllUsers,(req,res) => {
        console.log(req.users)
    })
*/




module.exports = router