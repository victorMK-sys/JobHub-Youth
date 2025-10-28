const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT
const HOST = 'localhost'
const app = express()

app.use(express.json())
app.use('/jobs', require('./routes/jobRoutes'))
app.use('/user', require('./routes/userRoutes'))

app.listen(PORT, HOST, () => console.log(`Server running on http://${HOST}:${PORT}`))