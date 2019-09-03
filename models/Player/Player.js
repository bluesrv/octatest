const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: String,
    victories: Number,
    matchHistory: [{
        player1: String,
        player2: String,
        winner: String
    }]
});

module.exports = mongoose.model('Player', playerSchema);