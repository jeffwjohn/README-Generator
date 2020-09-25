// function to generate markdown for README
function generateMarkdown(data) {

  var title = data.title;
  var description = data.description;
  let installation = data.installation;
  let usage = data.usage;
  let license = data.license;
  let contributing = data.contributing;
  let tests = data.tests;
  let github = data.github;
  let email = data.email;

  return `# ${title}

${description}
    
# Table of Contents

## Installation
${installation}
## Usage
${usage}
## License
${license}
## Contributing
${contributing}
## Tests
${tests}
## GitHub
${github}
## Email
${email}
`;
}

module.exports = generateMarkdown;