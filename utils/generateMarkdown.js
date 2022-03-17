/* // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {

}; */

const renderLicense = license => {
    if(license === 'None') {
        return '';
    }

    return `
    ## License

    [${license}](https://choosealicense.com/${license.toLowerCase()})
    `;
};

const genContribution = contribText => {
    if(!contribText) {
        return '';
    }

    return `
        
    `;
};

module.exports = data => {
    console.log(data);

    /* const { title,
        description,
        installation,
        usage,
        confirmContribution,
        contribution,
        test,
        license,
        github,
        email
    } = data; */

    return `
    # ${data.title}

    ## Description

    ${data.description}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}
    Provide instructions and examples for use. Include screenshots as needed.
    To add a screenshot, create an  folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ## Contributing

    ${genContribution(data.contribution)}
    
    ## License

    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

    ---

    ## Badges

    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

    ## Features

    If your project has a lot of features, list them here.

    ## How to Contribute

    If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

    `;
};