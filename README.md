# ReadMe Generator - Devon Faria
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

* [Description](#description)
* [Visuals](#visuals)
* [Installation](#installation)
* [Technologies](#technologies)
* [Licenses](#licenses)
* [Support](#support)
* [Authors](#authors)
* [Contributions](#contributions)

## Description

Welcome to the ReadMe Generator, where you can use only Terminal or Gitbash commands to construct a majority of a professional ReadMe, without manually completing most of the repetitive tasks. This application requires the use of Node JS. 

## Visuals

The following layout is the landing page you can expect to see on your browser.

![main page of traxx](./assets/images/Traxx-Main.png)

Once a search query is submitted, you will see the page change to this search page with ten results.

![search page of traxx](./assets/images/Traxx-searchpage.png)

Once a 'See more' button is chosen on a particular result, the page will then display the track-related material in this format. 

![track page of traxx](./assets/images/Traxx-trackpage.png)

If lyrics are not found upon initial search, then the following inamge will be displayed on the track page.  

![no lyrics error on search](./assets/images/Traxx_error.png)

## Installation

[CLick here for a video explaining installation](https://devonfaria.github.io/traxx/)

To enjoy this application, you will need to install Node JS on your local computer. [Click here for links to download Node JS.](https://nodejs.org/en/download/)

Then, clone this repository to your local computer, and open up the folder in your coding software (i.e. Visual Studio Code). Once open, open up your Terminal (on Mac OS) or GitBash (on Windows OS). You will have to direct yourself to the cloned repository, and then run this command in the terminal: "npm install". This will download the node modules this application needs to run on your local computer. 

After install, you will run the following in the terminal: "node index.js". This will trigger the Inquirer module to begin asking questions in the terminal. For each response, all you need to do is type out your response as you would like it to appear in your ReadMe.md file. One of the questions asks what you would like to name your markdown file. Most of the time, you will andwer "readme", however you can name it otherwise, if necessary. 

Once you finish answering each question, the application will dynamically create a markdown file in the dist folder located in the repository. The markdown file will have working links to your GitHub portfolio, a link to your deployed application page on GitHub, links to your license agreement, and a functional Table of Contents that jumps to the cooresponding portion of the markdown file when clicked. The remainder will be filled with the text you input into the command line. 

If your project does not have a license, the program will skip adding that section to your markdown file. The only portion of a traditional Readme that will be user-generated is the Visuals section, which will require uploading images and linking them to the file. 

## Technologies

* Node JS
* NPM
* Inquirer module

## Licenses

This application uses the MIT Software License. [Click here to view full license.](LICENSE)

## Support

Contact us at devonfaria@gmail.com if you need assistance downloading or activating this repository. You can also find me on [GitHub.](https://github.com/devonfaria)

## Authors

Devon Faria

## Contributions

A huge thank you to Anthony Cooper, Sasha Peters, and Andy our guest TA for providing useful solutions to some of our variable scoping issues and CORS errors. This project would not have been possible without them. 