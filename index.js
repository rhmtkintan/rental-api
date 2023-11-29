const Hapi = require('@hapi/hapi');
const routes = require('./src/routes');
const MySQL = require('mysql');

const connection = MySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'codekop_free_rental_mobil'
});

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
    cors: {
      origin: ['*'],
    },
  },
  });
  connection.connect();
  server.route(routes);
  await server.start();
  console.log(`Server berjalan di ---> ${server.info.uri} \nTekan Ctrl+C untuk menghentikan servermu`);
};
 
init();