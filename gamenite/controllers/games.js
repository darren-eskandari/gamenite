const express = require('express')
const router = express.Router()
const Game = require('../models/Games')

router.get('/', (req, res) => {
    console.log('GET HTTP method for game');
});

router.post('/games', async (req, res) => {
    try {
        const existingGame = await Game.findOne(req.body)
        if(existingGame) {
            res.json(existingGame)
        } else {
            const createdGame = await Game.create(req.body)
            res.json(createdGame)
        }   
    } catch(err) {
        console.log(err)
    }
});


module.exports = router