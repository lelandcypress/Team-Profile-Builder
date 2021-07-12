const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getRole() {
    const role = "Manager";
    return role;
  }
  getschool() {
    return this.school;
  }
}

module.exports = Intern;
