// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
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
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
