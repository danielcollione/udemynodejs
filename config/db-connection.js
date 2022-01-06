var mysql = require('mysql');

module.exports = () => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ha8h5MUb',
        database: 'portal_noticias',
    });
    return connection;
}