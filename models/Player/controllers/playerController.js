const Player = require('../Player');

exports.insertNewPlayer = async (name, result = {}) => {
    try {
        const player = new Player({
            name,
            victories: result.winner === name ? 1 : 0,
            matchHistory: result ? [result] : []
        });
        return player.save();
    } catch (e){
        return e;
    }
}

exports.updatePlayer = async (name, result) => {
    try {
        let updateObj = {$push: {matchHistory: result}};
        if(result.winner === name) updateObj = {...updateObj, $inc: {victories: 1}};
        let update = await Player.findOneAndUpdate({name: name}, updateObj);
        if(!update) update = this.insertNewPlayer(name, result);
        return update
    } catch (e){
        return e;
    }
}

exports.queryPlayer = async (name) => {
    try {
        const player = await Player.findOne({name: name});
        return player;
    } catch (e){
        return e;
    }
}