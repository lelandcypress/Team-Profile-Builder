const Manager = require("../manager");

describe("manager", () => {
  describe("inheritance", () => {
    it("Should create a new manager class, which inherits properties from the employee class", () => {});

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
});
