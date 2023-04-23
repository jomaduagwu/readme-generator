// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Academic Free License 3.0":
      return "[![License](https://img.shields.io/badge/License-Academic_Free_License_3.0-blue.svg)](https://opensource.org/license/afl-3-0-php/)";
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/license/Apache-2.0)";
      case "GNU GPLv3":
        return "[![License: GNU GPLv3](https://img.shields.io/badge/License-GNU_GLPv3-yellow.svg)](https://opensource.org/license/gpl-3-0/)";  
        case "Mozilla":
          return "[![License: Mozilla](https://img.shields.io/badge/License-Mozilla-yellow.svg)](https://opensource.org/license/mpl-2-0/)";    
        case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/MIT)";
    default:
      return "";
    }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Academic Free License 3.0'){
    return 'https://opensource.org/license/afl-3-0-php/'
  }
  if (license === 'Apache License 2.0') {
    return 'https://opensource.org/license/apache-2-0/'
  }
  if (license === 'GNU GPLv3'){
    return 'https://opensource.org/license/gpl-3-0/'
  } 
  if (license === 'Mozilla'){
    return 'https://opensource.org/license/mpl-2-0/'
  }
  if (license === 'MIT'){
    return 'https://opensource.org/license/mit/'
  }
  else {
    return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } 
  
    return `
    ## License

    This project is licensed under the terms of the ${license} license. See the [LICENSE](./LICENSE) file for details.
    `;
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)


  ## Description
  ${data.description}


  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Features](#Features)
  - [Tests](#Tests)
  - [Credits](#Credits)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under ${data.license}. Please see repo for more details.

  ## Contributing
  ${data.contributing}

  ## Features
  ${data.features}

  ## Tests 
  ${data.tests}

  ## Credits
  ${data.credits}

  ## Questions
  If you have any questions about this project, please contact me directly at ${data.email}. You can also find more of my work at ${data.github}.
`;
}

module.exports = generateMarkdown;
