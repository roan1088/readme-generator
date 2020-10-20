// Including the file system module 
var fs = require("fs");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
    // Create a file and write the data
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
    });
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
