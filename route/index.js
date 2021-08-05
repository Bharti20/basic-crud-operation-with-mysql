const express = require('express')
const Router = express.Router()

const postRoute = require('./createPostRoute')
const getRoute = require('./createGetRout')
const getAllDataRoute = require('./createGetAllDataRoute')
const putRouter = require('./createPutRoute')
const deleteRouter = require('./createDeleteRoute')
// const { deleteData } = require('../controller/deleteApi.controller')

Router.use('/insertData', postRoute)
Router.use('/showData', getRoute)
Router.use('/showAllData', getAllDataRoute)
Router.use('/updateData', putRouter)
Router.use('/deleletData', deleteRouter)

module.exports = Router
