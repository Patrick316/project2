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

router.post('/login', function(req, res) {
    var requestedPwd = req.body.user_pwd;
    var requestedUser = req.body.user_name;
    var requestedEmail = req.body.user_email;

    users.findAll({
            where: {
                name: requestedUser,
                email: requestedEmail,
                pwd: requestedPwd,
            }
        })
//         .then(function(crud_data) {
//             console.log(curd_data);
//            if(crud_data === 'null'){
//            	res.render("login")
//            }else{
//            	res.render("map")
//            }
//          })
// });
//create user routes
router.get('/create', function(req, res) {

    res.render("create");

});


router.post('/create', function(req, res) {
    var createPwd = req.body.user_pwd;
    var createUser = req.body.user_name;
    var createEmail = req.body.user_email;
    users.create({
            name: createUser,
            email: createEmail,
            password: createPwd
        })
        .then(function(newData) {

            console.log(newData)
            res.redirect('/success');
        })

    console.log(req.body)
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