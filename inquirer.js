const inquirer = require("inquirer");
const Employee = require("./employee");
const Engineer = require("./engineer");
const Manager = require("./manager");
const Intern = require("./intern");
const initInquire = () => {
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
      const role = data.role;
      const name = data.name;
      const id = data.id;
      const email = data.email;
      const officeNumber = data.officeNumber;
      const github = data.github;

      const school = data.school;
      switch (role) {
        case role == "Manager":
          let outcome = new Manager(name, id, email, officeNumber);
          return outcome;
      }
      console.log(outcome);
    });
};

module.exports = initInquire;
