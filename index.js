var app = require('express')();
var http = require('http').createServer(app);

app.get('/', (req, res) => {
  res.send('<h1><center>¡Hola, Bienvenidos este es un ejemplo sobre una actividad.!</center></h1>');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});