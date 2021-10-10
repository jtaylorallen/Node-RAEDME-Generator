// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let licenseIcon = "";
  switch (license) {
    case "Apache 2.0 License":
      licenseIcon = "![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      break;
    case "MIT License":
      licenseIcon = "![MIT License](https://img.shields.io/badge/l/atomic-design-ui.svg?)";
      break;
    case "GPLv3 License":
        licenseIcon = "![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)";
      break;
    case "Unlicense":
      licenseIcon = "![Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
      break;
  }

  return licenseIcon;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  var licenseURL = "";
  switch (license) {
    case "Apache 2.0 License":
      licenseURL = `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "MIT License":
      licenseURL = `[MIT License](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)`;
      break;
    case "GPLv3 License":
      licenseURL = `[GPLv3 License](https://opensource.org/licenses/)`;
      break;
    case "Unlicense":
      licenseURL = `[$(license)](http://unlicense.org/)`;
      break;
  }

  return licenseURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  return `This project uses ${license}.`
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  
  ## Description
  
  ${data.description}

  <!-- [URL](${data.URL}) -->

  ## Table of Content
  
  * [Installation](#installation)  
  * [Usage](#usage)
  * [Visual](#visual)  
  * [Test](#test)
  * [Contribution](#contribution) 
  * [Acknowledgement](#acknowledgement)
  * [Resources](#resources)
  * [License](#license) 
  * [Contact Me](#contactme)  
  
  ## Installation
  
  ${data.install}  
  ${data.install_code}
  
  ## Usage
  
  ${data.usage}  
  ${data.usage_code}

  ## Visuals

  
  ## Test
  
  ${data.test}
  
  ## Contribution

  ${data.contribution}

  ## Acknowledgement

  ${data.acknowledgement}

  ## License
  
  ${renderLicenseLink(data.license)}

  ## Resources

  ${data.resources}
  
  ## Contact Me
  
  GitHub Username: [@${data.github}](https://github.com/${data.github})  
   
  `;
}

module.exports = generateMarkdown;
