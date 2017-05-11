var express = require("express");
var router = express.Router();
var event = require("../models/")["event"];
  
  app.get("/api/event/", function(req, res) {
    db.Post.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });



  // Get route for returning posts of a specific category
  app.get("/api/event/category/:category", function(req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });





// Export routes for server.js to use.
module.exports = router;
