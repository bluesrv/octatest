const {queryPlayer, updatePlayer} =  require('../models/Player/controllers/playerController');

module.exports = function (fastify, opts, done) {
    fastify.post('/api/insertResult', async function (request, reply) {
        const result = request.body;
        try {
            const queries = [
                await updatePlayer(result.player1, result),
                await updatePlayer(result.player2, result)
        ]
            return {success: "true", queries}
        } catch (e){
            fastify.log.error(e);
            return {success: "false"};
        }
    });

    fastify.get('/api/query', async function (request, reply) {
        try {
            const result = await queryPlayer(request.query.name);
            return result;
        } catch (e){
            fastify.log.error(e);
            return {success: "false"};
        }
    });

    done();
}