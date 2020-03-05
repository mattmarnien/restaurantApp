// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var reservations = [
  {
    name: "Jim",
    phoneNumber: 6789998212,
    email: "jimfake@.com",
    id: 765,
  }, {
    name: "Matt",
    phoneNumber: 2345679012,
    email: "notmine@joke.com",
    id: 457
  }
]



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
  
});

app.get("/make", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

// Displays all characters
app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

app.get("/api/view", function(req, res) {
 

 

      return res.json(reservations);
   

});




// Create New Characters - takes in JSON input
app.post("/api/make", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  let newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html


  reservations.push(newReservation);
  console.log(newReservation)

  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
