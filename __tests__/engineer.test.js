const Engineer = require("../lib/Engineer.js");
const engineer = new Engineer(
	"Tony The Tiger",
	"64888",
	"tonythetiger@gmail.com",
	"tttgr8"
);

test("testing if we can get the constructor values for the engineer object", () => {
	expect(engineer.name).toBe("Tony The Tiger");
	expect(engineer.id).toBe("64888");
	expect(engineer.email).toBe("tonythetiger@gmail.com");
	expect(engineer.github).toBe("tttgr8");
});

test("testing if we can get the name from getName()", () => {
	expect(engineer.getName()).toBe("Tony The Tiger");
});

test("testing if we can get the id from getId()", () => {
	expect(engineer.getId()).toBe("64888");
});

test("testing if we can get the email from getEmail()", () => {
	expect(engineer.getEmail()).toBe("tonythetiger@gmail.com");
});

test("testing if we can get the github username from getGithub()", () => {
	expect(engineer.getGithub()).toBe("tttgr8");
});

test("testing if we can get the role from getRole()", () => {
	expect(engineer.getRole()).toBe("Engineer");
});
