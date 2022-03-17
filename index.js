/* 
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, 
Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled 
License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README 
*/




// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('./utils/filegen.js');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?',
            validate: titleInput => {
                if(titleInput) {
                return true;
                } else {
                console.log('Please enter the project title');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the project description?',
            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter the project description');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions?',
            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter the installation instructions');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information?',
            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter the usage information');
                return false;
            }}
        },
        {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Would you like to add Contribution Guidelines? (Optional)',
            default: false
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines?',
            when: ({ confirmContribution }) => {
                if(confirmContribution) {
                    return true;
                } else {
                    return false;
                };
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions?',
            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter the test instructions');
                return false;
            }}
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license?',
            choices: [
                'None',
                'AGPL-3.0-or-later',
                'GPL-3.0-or-later',
                'LGPL-3.0-or-later',
                'MPL-2.0',
                'Apache-2.0',
                'MIT',
                'BSL-1.0',
                'Unlicense'
            ]
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username',
            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter your GitHub username');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter your email address');
                return false;
            }}
        }
    ])
};

init()
    .then(readmeData => {
        return markdown(readmeData);
    })
    .then(pageInfo => {
        return writeFile(pageInfo);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
});