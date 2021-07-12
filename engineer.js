const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
  getRole() {
    const role = "Engineer";
    console.log(role);
    return role;
  }
}

module.exports = Engineer;
