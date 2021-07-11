const Employee = require("../employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create a new object containing the name of the employee matching inquirer prompt", () => {
      const name = "Mike";
      const id = 1;
      const email = "fakeemail@noreply.net";

      const obj = new Employee(name, id, email);
      expect("name" in obj).toEqual(true);
      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
    });
  });
});
