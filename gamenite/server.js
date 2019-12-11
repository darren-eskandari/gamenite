const express   = require('express')

const app       = express()
const PORT      = process.env.PORT || 8000

require('./config/db')

const userController = require('./controllers/users')

app.use(express.json())

app.use('/auth', userController)

app.get('/api/v1/welcome', (req, res) => {
    res.json({ message: '' })
})

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})
