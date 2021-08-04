const express = require('express')
const Router = express.Router()
const deleteControllerAPi = require('../controller/deleteApi.controller')

Router.use('/', deleteControllerAPi.deleteData)

module.exports = Router