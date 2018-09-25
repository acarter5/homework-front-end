const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database/operations.js');
const app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {    
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.use(express.static(path.join(__dirname, 'build')));


app.get('/favorites', function (req, res) {
  db.getFavorites((err, data) => {
    try {
      res.status(200).send(data);
    } catch (err) {
      res.staus(404).send(err);
    }  
  });
});


app.put('/favorites', function(req, res) {
  let favorites = req.body.favorites;

  db.updateFavorites(favorites, (err) => {
    try {
      res.status(200).send('update complete');
    } catch (err) {
      res.staus(404).send(err);
    }  
  });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log('lisening on port 8080');
});