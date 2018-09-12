const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const axios = require("axios");
const cors = require("cors");
const path = require("path");
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
app.use(express.static("build"));
app.use(express.static("public"));
app.use(cors());

// Add routes, both API and view
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.get("/api/animals/:zip/:type", function(req, res) {
  const {type, zip} = req.params;
  const url = `http://api.petfinder.com/pet.find?format=json&key=f2ed227e8b882e795297e6092f7a50d4&location=${zip}&animal=${type}`;

  axios
    .get(url)
    .then(response => {
      console.log(response.data.petfinder.pets.pet)
      res.json(response.data.petfinder.pets.pet)
    })
    .catch(err => console.log(err));
});
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/petAdoption",
  function() {
    // Start the API server
    app.listen(PORT, function() {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
  }
);
