const dbconn = require('./models');
const {
    idle, lihatUser
} = require('./handler')
const routes = [
    //GET
    {
        method: 'GET',
        path: '/',
        handler: idle,
    },
    {
    method: 'GET',
    path: '/users',
    handler: lihatUser,
    }
];
module.exports = routes;