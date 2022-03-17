// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'apache': ; return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'bsd3': ; return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'bsd2': ; return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    case 'gpl': ; return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'lgpl': ; return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
    case 'mit': ; return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'mozilla': ; return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'cddl': ; return;
    case 'ecl': ; return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    default: return '';
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'apache': ; return `[Link to license agreement](https://opensource.org/licenses/Apache-2.0)`;
    case 'bsd3': ; return `[Link to license agreement](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'bsd2': ; return `[Link to license agreement](https://opensource.org/licenses/BSD-2-Clause)`;
    case 'gpl': ; return `[Link to license agreement](https://opensource.org/licenses/gpl-license)`;
    case 'lgpl': ; return `[Link to license agreement](https://opensource.org/licenses/lgpl-license)`;
    case 'mit': return `[Link to license agreement](https://opensource.org/licenses/MIT)`;
    case 'mozilla': ; return `[Link to license agreement](https://opensource.org/licenses/MPL-2.0)`;
    case 'cddl': ; return `[Link to license agreement](https://opensource.org/licenses/CDDL-1.0)`;
    case 'ecl': ; return `[Link to license agreement](https://opensource.org/licenses/EPL-2.0)`;
    default: return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badgeText = renderLicenseBadge(license);
  const linkText = renderLicenseLink(license);
  if (license) {
    return `##License
    
    ${badgeText}
    
    ${linkText}`
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseText = renderLicenseSection(data.license);
  console.log();
  return `# ${data.title}

[Link to Instructional Video](https://devonfaria.github.io/professional-portfolio/)

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution Guidelines](#contribution)
* [Testing Instructions](#testing)
* [Licenses](#licenses)
* [Support](#support)

## Description

${data.desc}
 
## Installation

${data.install}
 
## Usage

${data.usage}
 
## Contribution Guidelines

${data.contr}
 
## Testing Instructions

${data.test}
 
## Licenses

${licenseText}
 
## Support

For additional help installing and running ${data.title}, please contact me at ${data.email}.
`;
}

let data = {
  title: 'a',
  desc: 'b',
  install: 'c',
  usage: 'd',
  contr: 'e',
  test: 'f',
  license: 'mit',
  username: 'g',
  email: 'h',
}

console.log(generateMarkdown(data));

module.exports = generateMarkdown;
