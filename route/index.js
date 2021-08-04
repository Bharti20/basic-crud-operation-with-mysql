const express = require('express')
const Router = express.Router()

const postRoute = require('./createPostRoute')
const getRoute = require('./createGetRout')
const putRouter = require('./createPutRoute')

Router.use('/updateData', putRouter)

module.exports = Router
