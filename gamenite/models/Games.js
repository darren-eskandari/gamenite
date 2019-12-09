const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const gameSchema = new Schema({
    gameId: String,
    name: String,
    imgURL: String,
    minPlayers: String,
    maxPlayers: String,
    expansion: Boolean
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
