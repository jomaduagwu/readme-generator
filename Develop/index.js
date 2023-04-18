// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project name',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Include any collaborators, third-party assets that require attribution, or links to tutorials followed.',
    },
    {
        type: 'options',
        name: 'license',
        message: 'Select a license.',
        choices: 
    },
    {
        type: 'input',
        name: 'features',
        message: 'List any features your project has.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples of how to run tests for your application.',
    },
];

// TODO: Create a function to write README file
function writeToFile('README.md', data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
