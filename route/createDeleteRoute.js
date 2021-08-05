const express = require('express')
const Router = express.Router()
const deleteControllerAPi = require('../controller/deleteApi.controller')

Router.delete('/', deleteControllerAPi.deleteData)

module.exports = Router