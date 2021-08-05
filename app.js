const express = require('express')
const app = express()
app.use(express.json())

const callApi = require('./route/index')

app.use('/',callApi)

app.listen(4000, function(err) {
    if(err) throw err;
    console.log('server running---')
})

