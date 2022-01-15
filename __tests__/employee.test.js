const Employee = require("../lib/Employee.js");
const employee = new Employee("James Bond", "007", "james.bond007@gmail.com");

test("testing if we can get the constructor values for the employee object", () => {
	expect(employee.name).toBe("James Bond");
	expect(employee.id).toBe("007");
	expect(employee.email).toBe("james.bond007@gmail.com");
});

test("testing if we can get the name from getName()", () => {
	expect(employee.getName()).toBe("James Bond");
});

test("testing if we can get the id from getId()", () => {
	expect(employee.getId()).toBe("007");
});

test("testing if we can get the email from getEmail()", () => {
	expect(employee.getEmail()).toBe("james.bond007@gmail.com");
});

test("testing if we can get the role from getRole()", () => {
	expect(employee.getRole()).toBe("Employee");
});
