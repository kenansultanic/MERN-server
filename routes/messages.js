const express = require('express')
const router = express.Router()
const Message = require('../models/message')


router.get('/get-messages/:sender/:receiver', async (req, res) => {
    try {
        const messages = await Message.find({sender: req.params.sender, receiver: req.params.receiver})
        res.status(200).json({messages: messages})
    }
    catch(error) {
        res.status(404).json({message: 'Server error'})
    }
})

router.post('/save-message/:sender/:receiver', async (req, res) => {
    const message = new Message({
        sender: req.params.sender,
        receiver: req.params.receiver,
        text: req.body.text
    })
    try {
        const newMessage = message.save()
        res.status(200).json({message: message})
    }
    catch(error) {
        res.status(500).json({message: 'Server error'})
    }
})


module.exports = router