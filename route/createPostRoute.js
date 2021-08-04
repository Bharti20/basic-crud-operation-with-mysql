const con = require('../databaseConnection/connection')
const express = require('express')
const router = express.Router()
const postControllerApi = require('../controller/postApi.controller')

router.post('/', postControllerApi.insertData)

module.exports = router


