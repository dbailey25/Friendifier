// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require('./app/routing/htmlRoutes')(app);
// require('./app/routing/apiRoutes')(app);

// Initiate the listener.
app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
