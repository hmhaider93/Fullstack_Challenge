/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"]*/


const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
  post: String,
});

const Test = mongoose.model('test', TestSchema);
