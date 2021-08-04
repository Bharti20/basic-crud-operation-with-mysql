const express = require('express')
const Router = express.Router()
const getControllerApi = require('../controller/getApi.Controller')

Router.get('/',getControllerApi.showAllData)

module.exports = Router