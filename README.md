<h1 align="center">Automation Web Shopping</h1>
<h1 align="center">
    <a href="https://www.javascript.com/">🔗 JavaScript</a>
    <a href="https://www.cypress.io/">🔗 Cypress</a>
    <a href="https://nodejs.org/en/">🔗 Node.js</a>
</h1>
<p align="center">Cypress test automation project for checkmarx</p>


## Getting Started

To run the project, you will need to install the node dependencies:

- [Node.js](https://nodejs.org/en/download/)

## Devops

The project already has a Jenkinsfile and a YAML file created to adapt to either a Jenkins or GitHub Actions pipeline, and both are already configured to access variables in the environment file (env).

## Execution via Terminal

You can run the project via command line.

```bash
# execute the commands in root folder
$ npm install 

# execute the command to run tests with interface.
$ npm run cypress:open 

# execute the command to run tests in headless mode.
$ npm run test

# If you run the headless mode you can see the report and the screenshot in reports folder.
$ Just Open the HTML file

## Cypress Environment Variables
User login data is stored in the cypress.env.json file. However, in a real project, the cypress.env.json file would be added to the gitignore file.

