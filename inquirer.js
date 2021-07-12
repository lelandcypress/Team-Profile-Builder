const inquirer = require("inquirer");
const initInquire = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter Employee Name",
        name: "name",
      },
    ])
    .then((data) => {
      console.log(data.name);
    });
};

module.exports = initInquire;
