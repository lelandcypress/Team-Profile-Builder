const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const { startHTML, endHTML } = require("./lib/html");

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
        completeRoster();
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
      //projectTeam.push(newTeamMember);
      updateHTML(newTeamMember);
      addEmployee();
    });
};

function updateHTML(employee) {
  const name = employee.name;
  const id = employee.id;
  const email = employee.email;
  const role = employee.getRole();
  let newHTML;
  if (role === "Manager") {
    newHTML = `<div class="col-3 border mx-3 my-3">
        <div class="bg-primary row">
          <h5>${name}<c/h5>
          <h5>${role}</h5>
        </div>
        <div class="bg-light row">
          <p class="border border-danger">Employee ID: ${id}</p>
          <p class="border border-danger">Email: ${email} </p>
          <p class="border border-danger">Office Number: ${employee.getOfficeNumber()}</p>
        </div>
        </div>`;
  } else if (role === "Engineer") {
    newHTML = `<div class="col-3 border mx-3 my-3">
        <div class="bg-primary row">
          <h5>${name}<c/h5>
          <h5>${role}</h5>
        </div>
        <div class="bg-light row">
          <p class="border border-danger">Employee ID: ${id}</p>
          <p class="border border-danger">Email: ${email} </p>
          <p class="border border-danger">Github Profile: ${employee.getGithub()}</p>
        </div>
        </div>`;
  } else if (role === "Intern") {
    newHTML = `<div class="col-3 border mx-3 my-3">
        <div class="bg-primary row">
          <h5>${name}<c/h5>
          <h5>${role}</h5>
        </div>
        <div class="bg-light row">
          <p class="border border-danger">Employee ID: ${id}</p>
          <p class="border border-danger">Email: ${email} </p>
          <p class="border border-danger">School: ${employee.getSchool()}</p>
        </div>
        </div>`;
  }

  fs.appendFile("./dist/team.html", newHTML, function (err) {
    if (err) console.log("Failed to create employee");
  });
}

const completeRoster = () => {
  fs.appendFile("./dist/team.html", endHTML, function (err) {
    if (err) console.log("Failed to create employee");
  });
};

const initApp = () => {
  fs.writeFile("./dist/team.html", startHTML, (err) =>
    err ? console.log("Failure to init") : initInquirer()
  );
};

initApp();
