const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
let projectTeam = [];

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "Add",
        message: "Add Team Member?",
      },
    ])
    .then((data) => {
      if (data.Add) {
        initInquirer();
      } else {
        console.log("Team Documented,rendering file");
      }
    });
};
const initInquirer = () => {
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
    ])
    .then((data) => {
      if (data.role === "Engineer") {
        newTeamMember = new Engineer(
          data.name,
          data.id,
          data.email,
          data.github
        );
      } else if (data.role === "Manager") {
        newTeamMember = new Manager(
          data.name,
          data.id,
          data.email,
          data.officeNumber
        );
      } else if (data.role === "Intern") {
        newTeamMember = new Intern(data.name, data.id, data.email, data.school);
      }
      projectTeam.push(newTeamMember);
      addEmployee();
    });
};

initInquirer();
