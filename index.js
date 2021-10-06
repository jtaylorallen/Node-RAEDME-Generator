// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [
    {
        //filename
        type: "input",
        message: "Enter the project filename",
        name: 'filename'
    },
    {
        //tile of project
        type: "input",
        message: "Enter the tile of the project",
        name: 'title',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
