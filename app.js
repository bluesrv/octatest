const fastify = require('fastify')({logger: true});

// fastify.register(require('fastify-mongodb'), {
//     forceClose: true,
    
//     url: 'mongodb://mongo/mydb'
// });

fastify.get("/*", {}, async (req, res) => {
    return {hello: "world"};
});

const start = async () => {
    try {
      await fastify.listen(3000)
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()