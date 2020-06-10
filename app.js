//requires express module
//put express intovariable app
// variable port for localhost 2000 in browser
var express = require("express");
var app = express();
const PORT = process.env.PORT || 2000;


//first route
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});
//second route (:animal) means it would accept any name of animal 
app.get("/speak/:animal", function (req, res) { 
    var sounds = { 
        pig: "Oink",
        cow: "Moo",
        dog: "woff woff woof",
        cat: "meow meaow"
    }
    //
    var animal = req.params.animal.toLowerCase;
    var sound =sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
});

 
app.listen(PORT);
