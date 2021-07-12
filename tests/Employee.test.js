const Employee = require("../employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create a new object containing the name of the employee matching inquirer prompt", () => {
      const name = "Mike";
      const id = 1;
      const email = "fakeemail@noreply.net";
      const role = "generic employee";
      //Test Properties
      const obj = new Employee(name, id, email, role);
      expect("name" in obj).toEqual(true);
      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
      //Test Methods
      const roleTest = obj.getRole();
      const nameTest = obj.getName();
      const emailTest = obj.getEmail();
      const IdTest = obj.getId();
      //Final Test
      expect(roleTest).toEqual("generic employee");
      expect(nameTest).toEqual(name);
      expect(emailTest).toEqual(email);
      expect(IdTest).toEqual(id);
    });
  });
});
