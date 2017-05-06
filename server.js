var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var Project = require("./models/")["Project"];
var port = 8888;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// get name page

app.get('/', function (req, res) {
Project.findAll()
	.then(function(crud_data){
		 var hbsObject = {
      salads: crud_data
    };
    res.render("index", hbsObject);
	})
});


// retrieve data from front end
app.post('/salad', function (req, res) {
    Salads.create({name: req.body.name})
	.then(function(newData){
      

		res.redirect('/');
	})
});

// update salad items
app.put("/:id", function(req, res) {
  // var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  // cat.update({
  //   sleepy: req.body.sleepy
  // }, condition, function() {

  // });
 
 	Object.keys(req.body).forEach(function(index,value){
 		console.log(index[value]);
 		
 	})
  res.redirect("/");
});

app.listen(port);
