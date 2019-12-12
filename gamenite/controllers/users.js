const express = require('express')
const router = express.Router()
const User = require('../models/Users')

router.get('/', (req, res) => {
    console.log('GET HTTP method for user');
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

router.get('/users/:userId', async(req, res) => {
    try {
        const foundUser = await User.find({uid: req.params.userId})
        res.json(foundUser)
        console.log(foundUser)
    } catch(err) {
        console.log(err)
    }
})

router.put('/users/:userId', async (req, res) => {
    console.log(req.body)
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
    res.json(updatedUser)
});

router.delete('/users/:userId', (req, res) => {
    return console.log(
        `DELETE HTTP method on user/${req.params.userId} resource`,
    );
});

module.exports = router