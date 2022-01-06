var app = require('./config/server');

require('./app/routes/noticias')(app);
require('./app/routes/home')(app);
require('./app/routes/formulario-inclusao-noticia')(app);

app.listen(3000, () => {
    console.log('the server is online on port 3000!');
});