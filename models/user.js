const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique: true
    },
    username: {
        required: true,
        type: String,
        unique: true
    },
    first_name: {
        required: true,
        type: String
    },
    last_name: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    pfp_url: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('user', dataSchema)