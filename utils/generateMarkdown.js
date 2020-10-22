// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![License badge](https://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${data.license} license.

  ## Contributing
  ${data.contributing}

  # Tests
  To run tests, run the following command:
  \`\`\`
  ${data.tests}
  \`\`\`

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.githubName}](https://github.com/${data.githubName}).
`;
}

module.exports = generateMarkdown;
