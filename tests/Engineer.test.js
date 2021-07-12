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
});
