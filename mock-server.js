const express = require('express')
const app = express()
const data = require('./mock-data')

app.use('/data', data)
app.listen(3000, () => console.log('Example app listening on port 3000!'))
