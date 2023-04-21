// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
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
        name: 'credits',
        message: 'Include any collaborators, third-party assets that require attribution, or links to tutorials followed.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license.',
        default: 'MIT',
        choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 'BSD 2-clause', 'MIT'], 
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
// function writeToFile('README.md', data) {}
  function writeToFile(fileName, data) {
    fs.writeFile('fileName', data, (err) =>
      err ? console.log(err) : console.log('Successfully created new README.md!')
    );
  }
  
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const readMeContent = generateReadMe(data);
        writeToFile('README.md', readMeContent);
});
}
// Function call to initialize app
init();
