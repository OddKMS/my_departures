import { server } from '@hapi/hapi';

const DeparturesServer = async () => {
  const departuresServer = server({
    port: 2020,
    host: 'localhost',
  });

  departuresServer.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello World';
    },
  });

  await departuresServer.start();
  console.log('Server is running on %s', departuresServer.info.uri);

  process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
  });
};

export default DeparturesServer;
