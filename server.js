const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3001;
const axios = require("axios");
const cors = require("cors");
const path = require("path");
const passport = require("./config/passport");
const db = require("./models");
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
app.use(express.static("build"));
app.use(express.static("public"));
app.use(cors());
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.post("/api/login", passport.authenticate("local"), function(req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  const user = {
    id: req.user.id,
    email: req.user.email
  }
  res.json({
    msg: "Success!",
    user
  });
});

app.post("/api/signup", function(req, res) {
  console.log(req.body);
  db.User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(function() {
      res.json({msg: "Successfully signed up!"});
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
});

app.get("/api/animals/:zip/:type", function(req, res) {
  const { type, zip } = req.params;
  const url = `http://api.petfinder.com/pet.find?format=json&key=f2ed227e8b882e795297e6092f7a50d4&location=${zip}&animal=${type}`;

  axios
    .get(url)
    .then(response => {
      console.log(response.data.petfinder.pets.pet);
      res.json(response.data.petfinder.pets.pet);
    })
    .catch(err => console.log(err));
});

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
