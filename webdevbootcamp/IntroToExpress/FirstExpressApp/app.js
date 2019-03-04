var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
	// req is an object that contains all the information about the request that was made that triggered this route
	// res will contain all of the information about what we're going to respond with
	res.send("Hi there");
});	
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
	res.send("Goodbye");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
	console.log("Someone made a request to /dog");
	res.send("MEOW");
});

// Route Parameter
//   `req.params` contains all of the route parameters and their corresponding values
app.get("/r/:subredditName", function(req, res) {
	console.log(req.params);
	var subreddit = req.params.subredditName
	res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("WELCOME TO THE COMMENTS PAGE!"); 
});

app.get("/*", function(req, res) {
	res.send("Your are a STAR!");
});

// Tell Express to listen for request
//   The third argument is optional
app.listen(3000, "127.0.0.1", function() { 
	console.log("Server has started");
});

