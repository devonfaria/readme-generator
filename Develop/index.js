// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your GitHub user name?',
    name: 'username',
  },
  {
    type: 'input',
    message: "What is the CaSe SenSiTiVe name of your Github repository?",
    name: 'repo',
  },
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
      {name: 'Apache License 2.0', value: 'apache'},
      {name: 'BSD 3-Clause "New" or "Revised" license', value: 'bsd3'},
      {name: 'BSD 2-Clause "Simplified" or "FreeBSD" license', value: 'bsd2'},
      {name: 'GNU General Public License (GPL)', value: 'gpl'},
      {name: 'GNU Library or "Lesser" General Public License (LGPL)', value: 'lgpl'},
      {name: 'MIT license', value: 'mit'},
      {name: 'Mozilla Public License 2.0', value: 'mozilla'},
      {name: 'Common Development and Distribution License', value: 'cddl'},
      {name: 'Eclipse Public License version 2.0', value: 'ecl'},
    ]
  },
  {
    type: 'input',
    message: 'What is your developer email?',
    name: 'email',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('./dist/readme.md', )
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
    .then ((data) => {
      generateMarkdown(data);
    })
    .then (() => {
      console.log('second then initiated');
      writeToFile(readme)
    })
    .catch((err) => {console.log(err)});
}

// Function call to initialize app
init();
