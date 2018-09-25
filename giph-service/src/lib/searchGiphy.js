const axios = require('axios');
const KEY = require('../config/giphy.js');

const searchGiphy = (query, whenGifs) => {
  axios.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: KEY,
      q: query
    }
  })
  .then((data) => whenGifs(data))
  .catch((err) => console.error(err));
};

module.exports = searchGiphy;