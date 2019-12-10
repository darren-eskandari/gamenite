const express = require('express')
const router = express.Router()
const User = require('../models/Users')

router.get('/', (req, res) => {
    console.log('GET HTTP method for user');
    // res.json({user: "user name"})
});

router.post('/users', async (req, res) => {
    try {
        const existingUser = await User.findOne(req.body)
        if(existingUser) {
            res.json(existingUser)
        } else {
            const createdUser = await User.create(req.body)
            res.json(createdUser)
        }   
  
    } catch(err) {
        console.log(err)
    }
  });


module.exports = router