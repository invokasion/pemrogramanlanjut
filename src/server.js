const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 443,
        host: process.argv.includes('--host') ? process.argv[process.argv.indexOf('--host') + 1] : 'localhost',
        routes: {
            cors: {
                origin: ["*"],
            },
        },
    });

    server.route(routes);

    try {
        await server.start();
        console.log(`Server berjalan pada ${server.info.uri}`);
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};

init();
