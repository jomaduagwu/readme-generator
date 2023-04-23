// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username (no @ required)?',
    },
    {
        type: 'input',
        name: 'title',
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
        name: 'contributing',
        message: 'Include guidelines for how other developers can contribute to your project.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Include any collaborators, third-party assets that require attribution, or links to tutorials followed.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to include?',
        default: 'MIT',
        choices: ['Apache License 2.0', 'GNU GPLv3', 'IBM', 'MIT', 'Mozilla'], 
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
    }
];

// TODO: Create a function to write README file
// function writeToFile('README.md', data) {}
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created new README.md!')
    );
  }
  
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const readMeContent = generateMarkdown(data);
        writeToFile('ExampleREADME.md', readMeContent);
    });
}
// Function call to initialize app
init();
