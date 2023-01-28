const MoviesList = require('../seeds/movies.seed');

const Movies = {
    showAll() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(MoviesList);
        }, Math.random() * 1000);
      });
    },
    findById(id) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(MoviesList[id]);
        }, Math.random() * 1000);
      });
    }
  }

module.exports = Movies;