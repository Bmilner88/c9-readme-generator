const inquirer = require('inquirer');
const writeFile = require('./utils/filegen.js');
const markdown = require('./utils/generateMarkdown.js');

const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
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
            message: 'What is your email address?',
            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter your email address');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'title',
            message: `What is your project's name?`,
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
            message: 'Please write a short description of your project',
            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter the project description');
                return false;
            }}
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license?',
            choices: [
                'None',
                'AGPL-3.0',
                'GPL-3.0',
                'LGPL-3.0',
                'MPL-2.0',
                'Apache-2.0',
                'MIT',
                'BSL-1.0',
                'Unlicense'
            ]
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter the installation command');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?',
            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter the test command');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter the usage information');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about contributing to the repo?',
            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter the contribution information');
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