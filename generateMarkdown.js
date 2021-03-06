// an array object for licenses. Each object in the array contains one of the license choices, 
// a link to the shields.io badge for that license and a link to the the text of the license itself
const licenseData = [
  {
    name: 'Apache License 2.0',
    badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    link: 'https://opensource.org/licenses/Apache-2.0',
  },
  {     
    name: 'GNU General Public License v3.0',
    badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    link: 'https://www.gnu.org/licenses/gpl-3.0',
  },
  {      
    name: 'MIT License',
    badge: 'https://img.shields.io/badge/License-MIT-blue.svg',
    link: 'https://opensource.org/licenses/MIT',
  },
  {
    name: 'BSD 2-Clause "Simplified" License',
    badge: 'https://img.shields.io/badge/License-BSD_2--Clause-blue.svg',
    link: 'https://opensource.org/licenses/BSD-2-Clause',
  },
  {
    name: 'BSD 3-Clause "New" or "Revised" License',
    badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    link: 'https://opensource.org/licenses/BSD-3-Clause',
  },
  {   
    name: 'Boost Software License 1.0',
    badge: 'https://img.shields.io/badge/License-Boost_1.0-blue.svg',
    link: 'https://opensource.org/licenses/BSL-1.0',
  },
  {    
    name: 'Creative Commons Zero v1.0 Universal',
    badge: 'https://img.shields.io/badge/License-CC0_1.0-blue.svg',
    link: 'http://creativecommons.org/publicdomain/zero/1.0/',
  },
  {
    name: 'Eclipse Public License 2.0',
    badge: 'https://img.shields.io/badge/License-EPL_1.0-blue.svg',
    link: 'https://opensource.org/licenses/EPL-1.0',
  },
  {    
    name: 'GNU Affero General Public License v3.0',
    badge: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
    link: 'https://opensource.org/licenses/AGPL-3.0',
  },
  {
    name: 'GNU General Public License v2.0',
    badge: 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
    link: 'https://opensource.org/licenses/GPL-2.0',
  },
  {    
    name: 'GNU Lesser General Public License v2.1',
    badge: 'https://img.shields.io/badge/License-LGPL_v2.1-blue.svg',
    link: 'https://opensource.org/licenses/LGPL-2.1',
  },
  {
    name: 'Mozilla Public License 2.0',
    badge: 'https://img.shields.io/badge/License-MPL_2.0-blue.svg',
    link: 'https://opensource.org/licenses/MPL-2.0',
  },
  {    
    name: 'The Unlicense', 
    badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
    link: 'https://opensource.org/licenses/unlicense',
  },
]

// this function first loops through the licenseData array object to find which license the user has selected.
// once found, it creates a licenseBadge variable with the badge and link, in markdown format. It returns that variable.
const renderLicenseBadge = (license) => {
  //console.log(license);
  for ( let i = 0; i < licenseData.length; i++) {
    if (license === licenseData[i].name){
      let licenseBadge = `[![License Badge](${licenseData[i].badge})](${licenseData[i].link})`;
      //console.log(licenseBadge);
      return licenseBadge;
      
    } else {
      i++
    };
  };
};


// this function first calls the renderLicenseBadge function to create the license badge.
// it then uses the data passed in to add user input data to the appropriate sections of the markdown template. 
function generateMarkdown(data) {
  let licenseSection = renderLicenseBadge(data.license);
  //console.log(licenseSection);
  return `# ${data.title}
  
  ${licenseSection}
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${licenseSection}

  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Questions
  Thanks for checking out my project. You can check out my GitHub profile at
  www.github.com/${data.username}.

  If you have any further questions, feel free to email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
