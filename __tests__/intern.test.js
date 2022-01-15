const Intern = require("../lib/Intern.js");
const intern = new Intern(
	"Rudy Ruettiger",
	"454545",
	"r.ruettiger@nd.edu",
	"Notre Dame"
);

test("testing if we can get the constructor values for the engineer object", () => {
	expect(intern.name).toBe("Rudy Ruettiger");
	expect(intern.id).toBe("454545");
	expect(intern.email).toBe("r.ruettiger@nd.edu");
	expect(intern.school).toBe("Notre Dame");
});

test("testing if we can get the name from getName()", () => {
	expect(intern.getName()).toBe("Rudy Ruettiger");
});

test("testing if we can get the id from getId()", () => {
	expect(intern.getId()).toBe("454545");
});

test("testing if we can get the email from getEmail()", () => {
	expect(intern.getEmail()).toBe("r.ruettiger@nd.edu");
});

test("testing if we can get the school name from getSchool()", () => {
	expect(intern.getSchool()).toBe("Notre Dame");
});

test("testing if we can get the role from getRole()", () => {
	expect(intern.getRole()).toBe("Intern");
});
