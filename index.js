const express = require('express')
const dotenv = require('dotenv')
const helmet = require('helmet')
const cors = require('cors')

dotenv.config()
const app = express()

app.use(helmet())

app.use(cors({
    origin: ['https://amannee.netlify.app', 'localhost'],
    credentials: true
}))

const router = require('./routers/router')

const PORT = process.env.PORT || 4100

app.use('/api', router)

app.get('/', (req, res) => {
    res.send('News proxy api')
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
