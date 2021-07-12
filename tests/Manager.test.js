const Manager = require("../manager");

describe("manager", () => {
  describe("Instantiation", () => {
    it("Should create a new manager class with proper key value pairs", () => {});

    const name = "Bill";
    const id = 159753;
    const email = "imamanager@noreply.net";
    const officeNumber = "555-555-5555";
    const newManager = new Manager(name, id, email, officeNumber);
    expect(newManager.name).toEqual(name);
    expect(newManager.id).toEqual(id);
    expect(newManager.email).toEqual(email);
    expect(newManager.officeNumber).toEqual(officeNumber);
  });
  describe("Inheritance", () => {
    it("Should be able to call methods from the Employee parent Class", () => {
      //Create Class
      const name = "Frank";
      const id = 159753;
      const email = "imamanager@noreply.net";
      const officeNumber = "555-555-5555";
      const newManager = new Manager(name, id, email, officeNumber);
      //Method Tests
      const roleTest = newManager.getRole();
      const nameTest = newManager.getName();
      const emailTest = newManager.getEmail();
      const IdTest = newManager.getId();
      const localTest = newManager.getOfficeNumber();
      //Execute Test
      expect(roleTest).toEqual("Manager");
      expect(nameTest).toEqual(name);
      expect(emailTest).toEqual(email);
      expect(IdTest).toEqual(id);
      expect(localTest).toEqual(officeNumber);
    });
  });
});
