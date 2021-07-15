# Team Profile Builder

## Table of contents

1. [Description](#Description)
2. [Tools](#Tools)
3. [Usage](#Usage)
4. [License](#License)
5. [Contribution](#Contribution)
6. [Tests](#Tests)
7. [Questions](#Questions)

## Description

This is an easy to use tool allowing users to build out a customized project team. Leveraging the power of OOP we are able to create uniform templates for each team member and append them onto our HTML file.

The development process started with the creation of an Employee parent class, and three distinct subclasses. Once unit testing confirmed inheritance was working between the parent and subclasses, we build out the inquirer prompts to prompt our users to answer questions based on their employees. Conditional questions such as information specific to job roles are easily solved by leveraging "When" which saves you a lot of "else if" statements

    {
        type: "input",
        message: "Enter Interns School",
        name: "school",
        when: (answers) => answers.role === "Intern",
      },

for the output HTML, I used fs write file to generate the first 25 lines of HTML. Once the user completes the prompts a series of divs are appended to the HTML file, and once the user completes the Inquirer prompts, the closing lines of HTML are appended

## Tools

- unit testing: Jest.js
- user input: inquirer.js

## Usage

See Walkthrough Video here: https://drive.google.com/file/d/1VoMvyUYqw2uR-X5GvifhDP9WIDLVwJmE/view

## License

None

## Contribution

Suggestions and collaboration are always welcome. Please reach to me via email if you are interested in a Pull Request, else feel free to fork it.

## Questions

Got questions, or are interested in collaborating?

Github:https://github.com/lelandcypress

Email: souterm1@gmail.com
