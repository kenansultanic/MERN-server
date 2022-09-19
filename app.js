const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const index = require('./routes/index')
const users = require('./routes/users')
const messages = require('./routes/messages')
const app = express();

require('dotenv').config()
require('./utils/database')

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/users', users)
app.use('/messages', messages)
app.use('/', index)


const PORT = process.env.PORT
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})