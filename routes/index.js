const express = require('express');
const router = express.Router();
const movie = require('../controllers/movies.controller');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', movie.list);
router.get('/movies/:id', movie.detail);

module.exports = router;