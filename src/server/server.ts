import Boom from '@hapi/boom';
import Hapi, { Request, ResponseToolkit } from '@hapi/hapi';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 2225;

const departuresServer = Hapi.server({
  port: PORT,
  host: HOST,
  routes: {
    cors: {
      origin: ['*'],
    },
    validate: {
      failAction: async (request: Request, h: ResponseToolkit, err: Error) => {
        throw Boom.badRequest(err.message);
      },
    },
  },
});

const DeparturesServer = async () => {
  departuresServer.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'My Departures Server';
    },
  });

  //await departuresServer.register(routes.fooRoute);

  await departuresServer.start();
  console.log('Server running on %s', departuresServer.info.uri);

  return departuresServer;
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

export default { DeparturesServer };
