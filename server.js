var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs ({defaultLayout: "main"}));
app.set("view engine","handlebars");

var routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(process.env.PORT || 8080, function(){
    console.log("App listening on PORT " + PORT);
})

///REMEMBER TO CHANGE THIS LATER!!!
// orm.selectAll("burger_name","burgers", function(result){
//     var data = result;
//     console.log(data);
// } );

