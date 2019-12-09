const express   = require('express')
// const path      = require('path')

const app       = express()
const PORT      = process.env.PORT || 8000

require('./config/db')




app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})
