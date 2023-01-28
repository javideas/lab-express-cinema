 // CRUD
const Movies = require('../models/Movie.model');

module.exports.list = (req, res, next) => {
   Movies.showAll()
      .then((MoviesList) => {
         console.log(MoviesList);
         res.render('movies', { MoviesList });
      })
      .catch(() => {});
};

module.exports.detail = (req, res) => {
   Movies.findById(req.params.id)
     .then((movie) => {
       res.render("detail", { movie });
     })
     .catch(() => {});
 };