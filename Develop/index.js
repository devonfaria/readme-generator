// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: "What is your project's title?",
    name: 'title',
  },
  {
    type: 'input',
    message: "Provide a short description of your program's functionality",
    name: 'desc',
  },
  {
    type: 'input',
    message: 'What are the installation instructions?',
    name: 'install',
  },
  {
    type: 'input',
    message: 'What is the usage information?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What are your contribution guidelines?',
    name: 'contr',
  },
  {
    type: 'input',
    message: 'Please provide test instructions for this program.',
    name: 'test',
  },
  {
    type: 'rawlist',
    message: 'What is your user name?',
    name: 'license',
    choices: [
      'Apache License 2.0',
      'BSD 3-Clause "New" or "Revised" license',
      'BSD 2-Clause "Simplified" or "FreeBSD" license',
      'GNU General Public License (GPL)',
      'GNU Library or "Lesser" General Public License (LGPL)',
      'MIT license',
      'Mozilla Public License 2.0',
      'Common Development and Distribution License',
      'Eclipse Public License version 2.0',
    ]
  },
  {
    type: 'input',
    message: 'What is your GitHub user name?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your developer email?',
    name: 'email',
  },
];

inquirer
  .prompt(questions)
  .then ((data) =>
    console.log('.then initiated', data)
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
