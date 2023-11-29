const rental = require('./rental');
const MySQL = require('mysql');
const connection = MySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'codekop_free_rental_mobil'
});

const idle = () => ({
    
    status: 'success',
    data: {
        namaProyek: 'Rental API',
        deskripsi: 'API Untuk Rental',
        author: 'Rachmatika Intan Sari',
    },
  });
const lihatUser = (request) => {
    connection.query('SELECT nama_pengguna FROM login', function (error, results, fields) {
        if (error) throw error;
        console.log(results);
       rental.push(results);
    });
}
  module.exports = {idle, lihatUser};  