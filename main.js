// con ésto ya conecto la carpeta db al mongodb (solo lo requiero, por eso aún no le hago variable, ya que no exportará anda aún)
require('./db/data-base');

// defino const express y la requiero, que me la llame
const express = require('express');
const moviesRouter = require('./router/movies.router');
const server = express();
//defino el puerto
const PORT = 3000;

// comienzo a crear enrutado

server.use('/movies', moviesRouter); // le digo al servidor que use la contsante que requiere el archivo que he creado

// cualuqier ruta, que me de el error
server.use('*', (req, res) => {

    res.status(404).json('Not found')
});

//arranco el servidor
server.listen(PORT, () => {
    console.log(`Sevidor arrancado en el puerto ${PORT}`);
})