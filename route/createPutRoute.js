const express = require('express')
const Router = express.Router()
const putControllerApi = require('../controller/putApi.controller')

Router.put('/',putControllerApi.updateData)

module.exports = Router