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
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'apache': ; return;
    case 'bsd3': ; return;
    case 'bsd2': ; return;
    case 'gpl': ; return;
    case 'lgpl': ; return;
    case 'mit': ; return;
    case 'mozilla': ; return;
    case 'cddl': ; return;
    case 'ecl': ; return;
    default: return '';
  }
};
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'apache': ; return;
    case 'bsd3': ; return;
    case 'bsd2': ; return;
    case 'gpl': ; return;
    case 'lgpl': ; return;
    case 'mit': ; return;
    case 'mozilla': ; return;
    case 'cddl': ; return;
    case 'ecl': ; return;
    default: return '';
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}\n
  \n
  [Link to Instructional Video](https://devonfaria.github.io/professional-portfolio/)\n
  \n
  ## Table of Contents\n
  \n
  * [Description](#description)\n
  * [Installation](#installation)\n
  * [Usage](#usage)\n
  * [Contribution Guidelines](#contribution)\n
  * [Testing Instructions](#testing)\n
  * [Licenses](#licenses)\n
  * [Support](#support)\n
  \n
  ## Description\n
  \n
  ${data.desc}\n
  \n 
  ## Installation\n
  \n
  ${data.install}\n
  \n 
  ## Usage\n
  \n
  ${data.usage}\n
  \n 
  ## Contribution Guidelines\n
  \n
  ${data.contr}\n
  \n 
  ## Testing Instructions\n
  \n
  ${data.test}\n
  \n 
  ## Licenses\n
  \n
  ${data.license}\n
  \n 
  ## Support\n
  \n
  For additional help installing and running ${data.title}, please contact me at ${data.email}.\n
`;
}

module.exports = generateMarkdown;
