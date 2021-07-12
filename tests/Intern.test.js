const Intern = require("../intern");

describe("manager", () => {
  describe("inheritance", () => {
    it("Should create a new intern class, which inherits properties from the employee class", () => {});

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
});
