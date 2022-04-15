// Uses require to link necessary packages (inquirer and fs), as well as our generateMarkdown javascript file
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// an array object that contains the prompts used by inquirer.prompt below to get user input that will be used to generate the readme
const questions = [
    {
        type: 'input',
        message: 'What is the name of your README?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Describes the steps a user needs to take to install this code.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Describe the usage of your code.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Select which license you are using for this project.',
        name: 'license',
        choices: [
        'Apache License 2.0', 
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense', 
        ],
    },
    {
        type: 'input',
        message: 'How can other users contribute to this project?',
        name: 'contributing',
    },
    {
        type: "input",
        message: "How can users test this code?",
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
    },
    {
        type: 'input',
        message:'What is your email address?',
        name: 'email',
    },

];

// function that uses fs to write data to a file. Filename/type and data are passed in as parameters. 
const  writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README has been successfully created!'))
};

// This function initializes the app. First it runs inquirer.prompt to get user input.
// next it passes that user input into the writeToFile function, which uses the generateMarkdown function to 
// apply that data to the markdown template in the generateMarkdown.js file. 
function init() {
    inquirer.prompt(questions)
    .then((answers) => writeToFile('README-TEST.md', generateMarkdown(answers)));   
}
    
// Function call to initialize app
init();
