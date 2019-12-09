const express = require('express')
const router = express.Router()
const User = require('../models/Users')

router.get('/', (req, res) => {
    console.log('GET HTTP method for user');
    // res.json({user: "user name"})
});



module.exports = router