const db = require('./config.js');

const getFavorites = (whenData) => {
  const qs = 'SELECT giphs FROM favorites WHERE user_id = 1';

  db.query(qs, whenData);
};

module.exports = { 
  getFavorites 
};

