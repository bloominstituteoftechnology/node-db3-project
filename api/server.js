const express = require('express')
const server = express()
const cors = require('cors')
const SchemeRouter = require('../schemes/scheme-router.js')

server.use(express.json())
server.use(cors())
server.use('/api/schemes', SchemeRouter)

module.exports = server