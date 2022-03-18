const renderLicense = license => {
    if(license === 'None') {
        return '';
    }

    return `
    ## License
    [https://choosealicense.com/licenses/${license.toLowerCase()}](https://choosealicense.com/licenses/${license.toLowerCase()})
    ![image](https://img.shields.io/badge/license-${license.replace('-', '--')}-brightgreen)
    `;
};

const genContribution = contribText => {
    if(!contribText) {
        return '';
    }

    return `
    ## Contributing
    ${contribText}
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

    ${genContribution(data.contribution)}

    ${renderLicense(data.license)}
    `;
};