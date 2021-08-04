const express = require('express')
const Router = express.Router()

const postRoute = require('./createPostRoute')
const getRoute = require('./createGetRout')
const putRouter = require('./createPutRoute')
const deleteRouter = require('./createDeleteRoute')
const { deleteData } = require('../controller/deleteApi.controller')

Router.use('/showData', getRoute)

module.exports = Router
