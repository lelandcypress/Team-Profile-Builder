const Engineer = require("../engineer");

describe("Engineer", () => {
  describe("inheritance", () => {
    it("Should create a new engineer class, which inherits properties from the employee class", () => {});

    const name = "Dale";
    const id = 24601;
    const email = "Engineer@noreply.net";
    const github = "fakeprofile";
    const newEngineer = new Engineer(name, id, email, github);
    expect(newEngineer.name).toEqual(name);
    expect(newEngineer.id).toEqual(id);
    expect(newEngineer.email).toEqual(email);
    expect(newEngineer.github).toEqual(github);
  });
  describe("Inheritance", () => {
    it("Should be able to call methods from the Employee parent Class", () => {
      //Create Class
      const name = "Tony";
      const id = 5123483;
      const email = "ineedCoffee@noreply.net";
      const github = "lelandcypress";
      const newEngineer = new Engineer(name, id, email, github);
      //Method Tests
      const roleTest = newEngineer.getRole();
      const nameTest = newEngineer.getName();
      const emailTest = newEngineer.getEmail();
      const IdTest = newEngineer.getId();
      const localTest = newEngineer.getGithub();
      //Execute Test
      expect(roleTest).toEqual("Engineer");
      expect(nameTest).toEqual(name);
      expect(emailTest).toEqual(email);
      expect(IdTest).toEqual(id);
      expect(localTest).toEqual(github);
    });
  });
});
