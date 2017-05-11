var express = require("express");
var router = express.Router();
var event = require("../models/")["event"];

router.get('/map', function(req, res) {
    users.findAll()
        .then(function(crud_data) {
            var hbsObject = {
                user: crud_data
            };
            res.render("login");
        })
});









// Export routes for server.js to use.
module.exports = router;
