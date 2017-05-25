var fs = require('fs');

console.log("Going to get the file");

fs.readFile('readFileSync.js', function(err, file) {
	console.log("Got the File");
});

console.log("App Continues....");

// Other way to put it as Callback function -- DO same thing

/*
var fs = require('fs');

var onFileLoad = function(err, file) {
	console.log("Got the File");
};

console.log("Going to get the file");

fs.readFile('readFileSync.js', onFileLoad);

console.log("App Continues....");

*/