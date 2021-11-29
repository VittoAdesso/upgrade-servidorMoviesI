const express = require('express');
const router = express.Router();

const Movies = require('../models/Movies');

// get all movies.
router.get('/', (req, res) => {
    // obtengo a todas las movies
    Movies.find()
        .then((movies) => {
            return res.json(movies);
        })
        .catch((error) => {
            console.error('Error en Get /', error);
            return res.status(500).json('Ha ocurrido un error en el servidor');
        })
});

// get usuario by ID

router.get('/:id', (req, res) => {

    const id = req.params.id;
    // para buscar en base al id específico
    Movies.findById(id)
        .then(movie => res.json(movie))
        .catch(error => {
            console.error(`Error en get/${id}`, error);
            return res.status(500).json('Ha ocurrido un error en el servidor');
        });
});

// para buscar según un titulo, u otro parámetro get == get que devuelva un valor
router.get('/director/:director', (req, res) => {
    const directorSolicitado = req.params.director;
    return Movies.find({ director: directorSolicitado }) // meto título entre llaves y su valor en const porque le digo que me filtre el campo de un objeto mas su valor

    // quiero buscar a varios, por eso uso el find... 
    .then((movies) => {
            return res.json(movies);
        })
        .catch((error) => {
            console.error('Error en Get /director/${director}', error);
            return res.status(500).json('Ha ocurrido un error en el servidor');
        })

});

// get de genre , es lo mismo de arriba 
router.get('/genre/:genre', (req, res) => {
    const genreSolicitado = req.params.genre;
    return Movies.find({ genre: genreSolicitado }) // meto título entre llaves y su valor en const porque le digo que me filtre el campo de un objeto mas su valor

    // quiero buscar a varios, por eso uso el find... 
    .then((movies) => {
            return res.json(movies);
        })
        .catch((error) => {
            console.error('Error en Get /genre/${genre}', error);
            return res.status(500).json('Ha ocurrido un error en el servidor');
        })

});

// get de year, los mas nuevos que una fecha indicada  
router.get('/year/mayorque/:year', (req, res) => {
    const yearSolicitado = req.params.year;
    return Movies.find({ year: { $gt: yearSolicitado } })

    // quiero buscar a varios, por eso uso el find... 
    .then((movies) => {
            return res.json(movies);
        })
        .catch((error) => {
            console.error('Error en Get /year/${year}', error);
            return res.status(500).json('Ha ocurrido un error en el servidor');
        })

});

module.exports = router;