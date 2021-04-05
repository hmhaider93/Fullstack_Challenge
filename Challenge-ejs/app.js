const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// make a database or connect to an existing one
mongoose.connect("mongodb://localhost:27017/knowron-challenge", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// define schema for the documents

const instructionsSchema = new mongoose.Schema({
  name: String,
  instructions: String,
});

// making the model for collection
const Instruction = mongoose.model("Instruction", instructionsSchema);

// default instructions for some tasks
const instructOne = new Instruction({
  name: "Welding",
  instructions:
    "Put on PPEs, prepare the work piece, follow material welding rules,....",
});

const instructTwo = new Instruction({
  name: "Injection Molding",
  instructions: "Some dummy instructions",
});

const defaultInstructions = [instructOne, instructTwo];

app.get("/", function (req, res) {
  // check whether some documents exist in the collection
  Instruction.find({}, function (err, foundDocs) {
    if (foundDocs.length === 0) {
      Instruction.insertMany(defaultInstructions, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("added default data");
        }
      });
      res.redirect("/");
    } else {
        res.render("main",{documents: foundDocs});
    }
  });
});

app.post("/", function(req, res){
    const jobTitle = req.body.jobTitle;
    const instructions = req.body.instructions;
    console.log(instructions.length);

    if (instructions.length && jobTitle.length){
        const newData = new Instruction({
            name: jobTitle,
            instructions: instructions
        });
    
        Instruction.insertMany([newData], function(err){
            if(!err){
                console.log("added new data");
            }
        });
    }
    res.redirect("/");

});

app.post("/delete", function(req, res){
    const entryToDelete = req.body.delButton;
    Instruction.findByIdAndRemove(entryToDelete, function(err){
        if(!err){
            console.log("successfully deleted an item");
            res.redirect("/");
        }
    });

});


app.listen(3000, function(){
    console.log("server running");
});
