const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    sender: {
        required: true,
        type: String,
    },
    receiver: {
        required: true,
        type: String,
    },
    text: {
        required: true,
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('message', dataSchema)