/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"]*/
// eslint-disable-next-line new-cap
const router = require("express").Router();
const mongoose = require("mongoose");
const TestSchema = new mongoose.Schema({
  title: String,
  post: String,
});

const Test = mongoose.model("test", TestSchema);

router.route("/").get((req, res) => {
  Test.find()
    .then((tests) => {
      console.log(tests);
      res.json(tests)})
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post(function (req, res) {
  console.log("On add end point");
  console.log(req.body);
  const description = req.body.description;
  const title = req.body.title;

  const Newpost = new Test({
    title: title,
    post: description,
  });
  Newpost.save();
});

router.post("/update", function (req, res) {
  console.log("On Update End point called");
  console.log(req.body);
  const id = req.body.id;
  Test.findByIdAndUpdate(
    id,
    { 
      title: req.body.title,
      post: req.body.description 
    },
    function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log(doc);
      }
    }
  );
});

router.route("/delete").post(function (req, res) {
  console.log("On delete end point");
  console.log(req.body.id);
  const id = req.body.id;
  Test.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log(err);
    }
  });
});

module.exports = router;
