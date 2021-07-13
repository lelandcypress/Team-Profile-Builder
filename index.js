const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter Employee Name",
        name: "name",
      },
      {
        type: "input",
        message: "Enter Employee ID",
        name: "id",
      },
      {
        type: "input",
        message: "Enter Employee email",
        name: "email",
      },
      {
        type: "list",
        message: "Select Employee Role",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        message: "Enter Managers Contact Number",
        name: "officeNumber",
        when: (answers) => answers.role === "Manager",
      },
      {
        type: "input",
        message: "Enter Engineers Github",
        name: "github",
        when: (answers) => answers.role === "Engineer",
      },
      {
        type: "input",
        message: "Enter Interns School",
        name: "school",
        when: (answers) => answers.role === "Intern",
      },
      {
        type: "list",
        message: "Add another employee?",
        name: "addAnother",
        choices: ["Yes", "No"],
      },
    ])
    .then((data) => {
      if (data.addAnother === "Yes") {
        addEmployee();
      }
    });
};

addEmployee();
