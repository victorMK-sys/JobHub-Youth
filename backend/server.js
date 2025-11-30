const connectDB = require('./config/db')
const express = require('express')
const cors = require('cors')
const { verifyToken } = require('./middleware/auth')
require('dotenv').config()

const PORT = process.env.PORT
const HOST = process.env.HOST
const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use('/api/users/me', require('./routes/me'))
app.use('/api/jobs', require('./routes/jobRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/auth', require('./routes/authRoutes'))

app.listen(PORT, HOST, () => console.log(`Server running on http://${HOST}:${PORT}`))