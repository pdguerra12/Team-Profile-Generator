const Manager = require("../lib/Manager.js");
const manager = new Manager(
	"Paul Guerra",
	"07032",
	"paul.guerra09@gmail.com",
	"618-625-8313"
);

test("testing if we can get the constructor values for the manager object", () => {
	expect(manager.name).toBe("Paul Guerra");
	expect(manager.id).toBe("07032");
	expect(manager.email).toBe("paul.guerra09@gmail.com");
	expect(manager.officeNumber).toBe("618-625-8313");
});

test("testing if we can get the name from getName()", () => {
	expect(manager.getName()).toBe("Paul Guerra");
});

test("testing if we can get the id from getId()", () => {
	expect(manager.getId()).toBe("07032");
});

test("testing if we can get the email from getEmail()", () => {
	expect(manager.getEmail()).toBe("paul.guerra09@gmail.com");
});

test("testing if we can get the office number from getOfficeNumber()", () => {
	expect(manager.getOfficeNumber()).toBe("618-625-8313");
});

test("testing if we can get the role from getRole()", () => {
	expect(manager.getRole()).toBe("Manager");
});
