/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"]*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(cors());
app.use(express.json());

const port = 5000;

mongoose.connect('mongodb://localhost:27017/fullStackChallenge', {
  useNerswUrlParser: true,
  useUnifiedTopology: true,
});


const routes= require('./routes');

app.use('/routes', routes);

app.listen(port, function(req, res) {
  console.log('Listening started.');
});
