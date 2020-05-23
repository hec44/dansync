// --- load modules
var express = require("express");


// --- initiate app
var app = express();
app.engine("html",require("ejs").renderFile);
app.set("view engine","html"); 

// --- view locations
app.get("/",function (request,response){
    response.render("../index.html")
});

// --- Start the server
var server = app.listen(3000, function(){
    console.log("listening to port %d",server.address().port)
});