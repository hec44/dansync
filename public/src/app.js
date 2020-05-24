// --- load modules
var express = require("express"),
    mymods = require("./scripts/dropbox.js"),
    body_parser = require("body-parser");

var savedropbox = mymods.saveDropbox;
var json2csv = mymods.json2csv;
// --- initiate app
var app = express();
app.engine("html",require("ejs").renderFile);
app.set("view engine","html"); 

// --- view locations

app.get("/", function (request, response) {
    response.render("index.html")
});

app.get("/finish", function(request, response) {
    response.render("finish.html");
});

app.post('/experiment-data', function(request, response) {
    // convert json to csv
    DATA_CSV = json2csv(request.body);

    // Get filename from data
    var rows = DATA_CSV.split("\n");
    ID_DATE_index = rows[0].split(",").indexOf('"ID_DATE"');
    ID_DATE = rows[1].split(",")[ID_DATE_index];
    ID_DATE = ID_DATE.replace(/"/g, "");
    filename = ID_DATE + ".csv";
    savedropbox(DATA_CSV, filename);
    response.end();
    // console.log(DATA_CSV)
});

// --- Start the server
var server = app.listen(3000, function(){
    console.log("listening to port %d",server.address().port)
});