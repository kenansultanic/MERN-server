const express = require('express')
const router = express.Router()
const Model = require('../models/model')

router.get('/test', (req, res) => {
    res.send("Poruka sa servera")
})

router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/get', async (req, res) => {
        
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router