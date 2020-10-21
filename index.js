// Including the file system module 
var fs = require("fs");
var inquirer = require("inquirer");

// array of questions for user
const questions = [
    {type: "input", message: "What is your Github username?", name: "githubName"},
    {type: "input", message: "What is your email address?", name: "email"},
    {type: "input", message: "What is the title of your project?", name: "title"},
    {type: "input", message: "Provide a short description of your project", name: "description"},
    {type: "list", message: "What kind of license should your project have?", name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]},
    {type: "input", message: "What command should be run to install dependenies?", name: "installation",
    default: "npm i"},
    {type: "input", message: "What command should be run to run tests?", name: "tests",
    default: "npm test"},
    {type: "input", message: "What does the user need to know about using the repo?", name: "usage"},
    {type: "input", message: "What does the user need to know about contributing to the repo?", name: "contributing"}
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
    inquirer.prompt(questions).then(function(response) {
        console.log(response);
    })
}

// function call to initialize program
init();
