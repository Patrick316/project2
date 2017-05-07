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

'bosco123'
    users.findAll({
            where: {
                name: requestedUser
            },
            where:{
            	email: requestedEmail
            },
            where:{
            	pwd: requestedPwd
            }
        })
        .then(function(crud_data) {
            console.log(curd_data);
        })


});


// Export routes for server.js to use.
module.exports = router;