var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send("<html><body>Portal de Noticias</body></html>")
})

app.listen(3000, () => {
    console.log('the server is online on port 3000!');
});