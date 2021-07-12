const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, "Manager");
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}
const earl = new Manager("earl", 24601, "noreply", 55555555);
console.log(earl.getRole());
module.exports = Manager;
