var express = require("express");
var router = express.Router();
var users = require("../models/")["User"];

router.get('/login', function(req, res) {
    users.findAll()
        .then(function(crud_data) {
            var hbsObject = {
                user: crud_data
            };
            res.render("login");
        })
});

router.post('/login', function(req, res) {
    var requestedPwd = req.body.user_pwd;
    var requestedEmail = req.body.user_email;

    users.findAll({
            raw: true
        })
        .then(function(crud_data) {

            crud_data.forEach(function(index) {

                if (index.email === index.email && index.password === requestedPwd) {
                    res.redirect('/map')
                } else {
                    res.redirect('/login');
                }
            });


        })
});
// create user routes
router.get('/create', function(req, res) {

    res.render("create");

});


router.post('/create', function(req, res) {


    var id = Math.floor(Math.random() * 90000) + 10000;
    var createPwd = req.body.user_pwd;
    var createUser = req.body.user_name;
    var createEmail = req.body.user_email;
    users.create({
            id: id,
            name: createUser,
            email: createEmail,
            password: createPwd
        })
        .then(function(newData) {
            res.redirect('/success');
        })


});


// success page route
router.get('/success', function(req, res) {

    res.render("success");

});
// map page route
router.get('/map', function(req, res) {

    res.render("map");

});

// Export routes for server.js to use.
module.exports = router;