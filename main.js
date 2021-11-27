// con ésto ya conecto la carpeta db al mongodb (solo lo requiero, por eso aún no le hago variable, ya que no exportará anda aún)
require('./db/data-base');

// defino const express y la requiero, que me la llame
const express = require('express');

const server = express();

//defino el puerto
const PORT = 3000;

//arranco el servidor
server.listen(PORT, () => {
    console.log(`Sevidor arrancado en el puerto ${PORT}`);
})