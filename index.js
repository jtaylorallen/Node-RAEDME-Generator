// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

const questions = [
    {
        //Title of the project
        type: 'input',
        message: 'What is the title of you project?',
        name: 'title',
    },
    {
        //Description
        type: 'input',
        message: 'Tell the users about your project.',
        name: 'description',
    },
    {
        //Live link of project
        type: 'input',
        message: 'What is your projects active URL?',
        name: 'URL',
    },
    {
        //install
        type: 'input',
        message: 'How do you install your project?',
        name: 'install',
    },
    {
        //install code
        type: 'input',
        message: 'What code do you use to install your project?',
        name: 'install_code',
    },
    {
        //usage
        type: 'input',
        message: 'How do you use your project?',
        name: 'usage',
    },
    {
        //usage code
        type: 'input',
        message: 'What code do you use to run your project? ',
        name: 'usage_code',
    },
    {
        //tests
        type: 'input',
        message: 'What test did you run on your project, if any?',
        name: 'test',
    },
    {
        //contributions
        type: 'input',
        message: 'Did anyone contribute to this project, please add them?',
        name: 'contribution',
    },
    {
        //acknowledgement
        type: 'input',
        message: 'Would you like to acknowledge anyone who helped you? ',
        name: 'acknowledgement',
    },
    {
        //resources
        type: 'input',
        message: 'What resourses did you use to create this project?',
        name: 'resources',
    },
    {
        //license
        type: 'list',
        message: 'Which license did you use for your project?',
        name: 'license',
        choices: [
            "Apache 2.0 License",
            "MIT License",
            "GPLv3 License",
            "Unlicense",
        ]
    },
    {
        //github username
        type: 'input',
        message: 'What is your Github user name?',
        name: 'github',
    },
];

// TODO: Create a function to write README file

function writeToFile(data) {
    fs.writeFile(`README-Example.md`, generateMarkdown(data), (err) =>
    err ? console.error("error") : console.log("success"))
}
// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
    .then((response) =>
        writeToFile(response)
    );
}

// Function call to initialize app

init();
