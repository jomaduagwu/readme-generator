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
        type: 'choices',
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
inquirer.prompt(questions).then((answers) => {
    const readMeContent = generateReadMe(answers);
  
    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.MD!')
    );
  });
  
// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
