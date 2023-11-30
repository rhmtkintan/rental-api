const {
    getContactInfoHandler,
    addBookingHandler,
    getAllBookingsHandler,
  getBookingByIdHandler,
    updateBookingByIdHandler,
    deleteBookingByIdHandler,
  } = require('./handler');
  
  const routes = [
    {
      method: 'POST',
      path: '/bookings',
      handler: addBookingHandler,
      options: {
        cors: {
          origin: ['*'],
        },
      },
    },
    {
        method: 'GET',
        path: '/info',
        handler: getContactInfoHandler,
      },
    {
      method: 'GET',
      path: '/bookings',
      handler: getAllBookingsHandler,
    },
    {
      method: 'GET',
      path: '/bookings/{id}',
      handler: getBookingByIdHandler,
    },
    {
      method: 'PUT',
      path: '/bookings/{id}',
      handler: updateBookingByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/bookings/{id}',
      handler: deleteBookingByIdHandler,
    },
  ];
  
  module.exports = routes;