const axios = require('axios');
const KEY = require('../config/giphy.js');

const getTrending = (whenGifs) => {
  axios.get('http://api.giphy.com/v1/gifs/trending', {
    params: {
      api_key: KEY
    }
  })
  .then((data) => whenGifs(data))
  .catch((err) => console.error(err));
};

module.exports = getTrending;