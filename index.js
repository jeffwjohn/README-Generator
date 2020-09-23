const fs = require('fs');
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: 'What is your project title? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please describe your project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContents',
            message: 'Would you like to include a Table of Contents?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'contents',
            message: 'Choose which contents to include in your table.',
            choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions' ],
            when: ({
                confirmContents
            }) => confirmContents
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe how to install your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please describe how to install your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Explain how to use your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please explain how to use your project!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of license does your project have? (Required)',
            choices: ['GNU General Public License (GPL)', 'Apache', 'Microsoft Public Licenses (Ms-PL)', 'Berkeley Software Distribution (BSD)', 'Common Development and Distribution License (CDDL)', 'Eclipse Public License (EPL)', 'MIT']
      
          },
          {
            type: 'input',
            name: 'contributing',
            message: 'Describe the guidelines for contributing to your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please describe guidelines for contributing to your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write tests for your project and describe how to run them. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please write tests for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        
    ]).then(data => {
        console.log(data);
        fs.writeFile('text.json', JSON.stringify(data, null, '\t'), function (err) {

            if (err) {
                return console.log(err);
            }
        });
    });

};
// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {}

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

promptUser();