class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {}

  getId() {
    console.log(this.id);
  }
  getEmail() {
    console.log(email);
  }
  getRole() {
    const role = "Employee";
    console.log(role);
    return role;
  }
}

const Frank = new Employee("Frank", 1, "helloworld");

//Frank.getRole();

module.exports = Employee;
