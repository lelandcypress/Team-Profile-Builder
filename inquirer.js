const inquirer = require("inquirer");
const initInquire = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "dicks out for",
        name: "name",
      },
    ])
    .then((data) => {
      console.log(data.name);
    });
};

module.exports = initInquire;
