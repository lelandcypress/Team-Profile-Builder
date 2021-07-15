const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const { startHTML, updateHTML, endHTML } = require("./lib/html");

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
        console.log("Team Documented! Have a nice day");
        //Appends closing HTML tags
        completeRoster();
      }
    });
};
//Begin inquirer
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
      //After object is instantiated, it is added to team.html
      //See html.js
      updateHTML(newTeamMember);
      //User is given option to add another employee
      addEmployee();
    });
};
//closes HTML, see html.js for HTML maintenance
const completeRoster = () => {
  fs.appendFile("./dist/team.html", endHTML, function (err) {
    if (err) console.log("Failed to create employee");
  });
};
//Process starts, renders top lines of HTML, and starts inquirer once completed.
const initApp = () => {
  fs.writeFile("./dist/team.html", startHTML, (err) =>
    err ? console.log("Failure to init") : initInquirer()
  );
};

initApp();
module.exports = initApp;
