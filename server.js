// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [{
  name: "Andy"
}];
var waitlist = [{
  name: "James"
}];


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });
  
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });

  app.post("/api/tables", function(req, res) {
      var newRes = req.body;

      if(tables.length < 5) {
        tables.push(newRes);
        res.json(newRes);
      } else {
        waitlist.push(newRes);
        res.json(newRes);
      }
      

  });

  app.listen(PORT, function() {
    console.log("App listening on port: " + PORT);
  });

