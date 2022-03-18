// If there is a license chosen, this function will insert a badge to the license's page in the Browser
function renderLicenseBadge(license) {
  switch (license) {
    case 'apache': return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'bsd3': return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'bsd2': return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    case 'gpl': return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'lgpl': return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
    case 'mit': return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'mozilla': return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'ecl': return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    default: return '';
  }
};


// If there is a license chosen, this function will insert a link in the License section to the license webpage
function renderLicenseLink(license) {
  switch (license) {
    case 'apache': return `[Link to license agreement](https://opensource.org/licenses/Apache-2.0)`;
    case 'bsd3': return `[Link to license agreement](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'bsd2': return `[Link to license agreement](https://opensource.org/licenses/BSD-2-Clause)`;
    case 'gpl': return `[Link to license agreement](https://opensource.org/licenses/gpl-license)`;
    case 'lgpl': return `[Link to license agreement](https://opensource.org/licenses/lgpl-license)`;
    case 'mit': return `[Link to license agreement](https://opensource.org/licenses/MIT)`;
    case 'mozilla': return `[Link to license agreement](https://opensource.org/licenses/MPL-2.0)`;
    case 'ecl': return `[Link to license agreement](https://opensource.org/licenses/EPL-2.0)`;
    default: return '';
  }
};

// This function will render the License section of the markdown file if a license is chosen, or remove all license sections if no license
function renderLicenseSection(data) {
  if (data.license !== '') {
    const badgeText = renderLicenseBadge(data.license);
    const linkText = renderLicenseLink(data.license);
    console.log(`Badge: ${badgeText}`);
    console.log(`linkText: ${linkText}`);
    return `${data.test}
    
## License
    
${badgeText}
    
${linkText}`
  } else {
    return `${data.test}
    `
  }
};


// This function uses the data input into object created by the user responses to fill in a professional markdown file, with template literals to display that information. Generates the license section if a license is chosen.  
function generateMarkdown(data) {
  let licenseHeader;
  let licenseText;
  if (data.license) {
    licenseText = renderLicenseSection(data);
    licenseHeader = `* [Testing Instructions](#testing-instructions)
* [License](#license)`;
  } else {
    licenseHeader = `* [Testing Instructions](#testing-instructions)`;
  }
  return `# ${data.title}

[Link to deployed application](https://${data.username}.github.io/${data.repo}/)

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution Guidelines](#contribution-guidelines)
${licenseHeader}
* [Questions](#questions)

## Description

${data.desc}
 
## Installation

${data.install}
 
## Usage

${data.usage}
 
## Contribution Guidelines

${data.contr}
 
## Testing Instructions

${licenseText}
 
## Questions

For additional help installing and running ${data.title}, please contact me at ${data.email}. You can also find me on Github. [Click here to visit my GitHub profile.](https://github.com/${data.username})
`;
}
// Exports the generateMarkdown function to the index.js file
module.exports = generateMarkdown;
