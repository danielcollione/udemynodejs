var db = require('../../config/db-connection');

module.exports = (app) => {

    var connection = db();

    app.get('/noticias', (req, res) => {
        connection.query('select * from noticias', (error, result) => {
            res.render("noticias/noticias", { noticias: result });
        });
    });
}