const connectDB = require('./config/db')
const express = require('express')
const cors = require('cors')
const { verifyToken } = require('./middleware/auth')
require('dotenv').config()

const PORT = process.env.PORT || 5500
const HOST = process.env.HOST
const app = express()

connectDB()

const corsOptions = {
  origin: ["https://jobhub-youth-web.onrender.com"],
  methods: ['GET', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

app.use(cors(corsOptions))
app.use(express.json())

app.use('/api/users/me', require('./routes/me'))
app.use('/api/jobs', require('./routes/jobRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/auth', require('./routes/authRoutes'))

app.listen(PORT, "0.0.0.0", () => console.log(`Server running`))