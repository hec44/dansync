// --- LOAD MODULES
var express = require("express"),
    mymods = require("./scripts/mymods.js"),
    dropboxxx = require("./scripts/dropbox.js")
    body_parser = require("body-parser");

var savedropbox = mymods.saveDropbox;
var json2csv = mymods.json2csv;

// --- INSTANTIATE THE APP
var app = express();

// --- STATIC MIDDLEWARE
app.use(express.static(__dirname + '/public'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/scripts", express.static(__dirname + '/scripts'));
app.use(body_parser.json());

// --- VIEW LOCATIONS. SET UP SERVING STATIC HTML
app.set("views", __dirname + "/public/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// --- ROUTING
app.get("/", function (request, response) {
    response.render("index.html")
});

app.get("/finish", function(request, response) {
    response.render("finish.html");
});

app.post('/experiment-data', function(request, response) {
    // convert json to csv
    DATA_CSV = json2csv(request.body);
    var TODAY = new Date();
    var DD = String(TODAY.getDate()).padStart(2, '0');
    var MM = String(TODAY.getMonth() + 1).padStart(2, '0');
    var YYYY = TODAY.getFullYear();
    const DATE = YYYY + MM + DD;

    // Get filename from data
    var rows = DATA_CSV.split("\n");
    ID_DATE_index = rows[0].split(",").indexOf('"ID_DATE"');
    ID_DATE = rows[1].split(",")[ID_DATE_index];
    filename = Math.random().toString(36).substring(7)+DATE + ".csv";
    console.log(filename);
    savedropbox(DATA_CSV, filename);
    response.end();
    //console.log(DATA_CSV);
    //console.log(response);
});

// --- Start the server
var server = app.listen(process.env.PORT, function(){
    console.log("listening to port %d", server.address().port);
});