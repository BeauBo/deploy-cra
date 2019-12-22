const express = require('express')
const path = require('path')
const config = require('./configure')

const app = express()

config(app)

app.use(express.static(path.join(__dirname, '../build')))

const PORT = process.env.PORT || '5000'

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))

