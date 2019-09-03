const fastify = require('fastify')({logger: true});
const mongoose = require('mongoose');
const {dbAddress} = require('./config');

mongoose.connect(dbAddress)
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

fastify.register(require('./routes/apiRoutes'));

const start = async () => {
        try {
            await fastify.listen(3000);
            fastify.log.info(`server listening on ${fastify.server.address().port}`);
        } catch (err) {
            fastify.log.error(err);
            process.exit(1);
        }
    }
start()