const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    const role = "Manager";
    return role;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
