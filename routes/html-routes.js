var express = require("express");
var router = express.Router();
var users = require("../models/")["User"];

router.get('/login', function(req, res) {
    users.findAll()
        .then(function(crud_data) {
            var hbsObject = {
                user: crud_data
            };
            res.render("login", hbsObject);
        })
});

router.post('/check/login', function(req, res) {
console.log("hello from login", req)
});


// Export routes for server.js to use.
module.exports = router;