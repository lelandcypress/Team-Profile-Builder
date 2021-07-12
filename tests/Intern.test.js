const Intern = require("../intern");

describe("manager", () => {
  describe("Instantiation", () => {
    it("Should create a new Intern class, with proper key value pairs", () => {});

    const name = "Melissa";
    const id = 951753;
    const email = "imnew@noreply.net";
    const school = "The Citadel";
    const newIntern = new Intern(name, id, email, school);
    expect(newIntern.name).toEqual(name);
    expect(newIntern.id).toEqual(id);
    expect(newIntern.email).toEqual(email);
    expect(newIntern.school).toEqual(school);
  });
  describe("Inheritance", () => {
    it("Should be able to call methods from the Employee parent Class", () => {
      //Create Class
      const name = "Melissa";
      const id = 159753;
      const email = "intertastic@noreply.net";
      const school = "The Citadel";
      const newIntern = new Intern(name, id, email, school);
      //Method Tests
      const roleTest = newIntern.getRole();
      const nameTest = newIntern.getName();
      const emailTest = newIntern.getEmail();
      const IdTest = newIntern.getId();
      const localTest = newIntern.getSchool();
      //Execute Test
      expect(roleTest).toEqual("Intern");
      expect(nameTest).toEqual(name);
      expect(emailTest).toEqual(email);
      expect(IdTest).toEqual(id);
      expect(localTest).toEqual(school);
    });
  });
});
