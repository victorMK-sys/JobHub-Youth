const connectDB = require('./config/db')
const express = require('express')
const fs = require('fs')
const cors = require('cors')
require('dotenv').config()

const home = fs.readFileSync('../frontend/index.html', 'utf-8')


const PORT = process.env.PORT
const HOST = 'localhost'
const app = express()

connectDB()
app.use(cors())
app.use(express.json())
app.use('/api/jobs', require('./routes/jobRoutes'))
app.use('/api/user', require('./routes/userRoutes'))

app.listen(PORT, HOST, () => console.log(`Server running on http://${HOST}:${PORT}`))
