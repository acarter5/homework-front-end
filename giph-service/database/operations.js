const db = require('./config.js');

const getFavorites = (whenData) => {
  const qs = 'SELECT giphs FROM favorites WHERE user_id = 1';

  db.query(qs, whenData);
};

const updateFavorites = (favorites, whenUpdated) => {
  const qs = 'UPDATE favorites SET giphs=' + JSON.stringify(favorites) + ' WHERE user_id =1';

  console.log('query string', qs);

  db.query(qs, whenUpdated);
};

module.exports = { 
  getFavorites,
  updateFavorites
};

