const express = require('express')
const router = express.Router()
const getAllDataApiController = require('../controller/getAllDataController')

router.use('/', getAllDataApiController.showAllData)

module.exports = router