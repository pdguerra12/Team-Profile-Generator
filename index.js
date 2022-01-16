const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const generateSite = require("./src/generate-site.js");

const path = require("path");
const output = path.resolve(__dirname, "dist");
const outputPath = path.join(output, "index.html");

const teamMembers = [];

const promptManager = () => {
	return inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is your name? (Required)",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please enter your name!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "employeeId",
				message: "Enter your employee ID (Required)",
				validate: (employeeId) => {
					if (employeeId) {
						return true;
					} else {
						console.log("Please enter your employee ID!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "email",
				message: "Enter your email address (Required)",
				validate: (email) => {
					if (email) {
						return true;
					} else {
						console.log("Please enter your email address!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "officeNumber",
				message: "Enter your office number (Required)",
				validate: (officeNumber) => {
					if (officeNumber) {
						return true;
					} else {
						console.log("Please enter your office number!");
						return false;
					}
				},
			},
		])
		.then((answers) => {
			console.log(answers);
			const manager = new Manager(
				answers.name,
				answers.employeeId,
				answers.email,
				answers.officeNumber
			);
			teamMembers.push(manager);
			promptMenu();
		});
};

const promptMenu = () => {
	return inquirer
		.prompt([
			{
				type: "list",
				name: "menu",
				message: "Which option you would like to continue with?:",
				choices: [
					"add an engineer",
					"add an intern",
					"complete building my team",
				],
			},
		])
		.then((userChoice) => {
			switch (userChoice.menu) {
				case "add an engineer":
					promptEngineer();
					break;
				case "add an intern":
					promptIntern();
					break;
				default:
					buildTeam();
			}
		});
};

const promptEngineer = () => {
	console.log(`
    ===============
    Add A New Engineer
    ===============
    `);

	return inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is the name of the engineer? (Required)",
				validate: (engineerName) => {
					if (engineerName) {
						return true;
					} else {
						console.log("Please enter the name of the engineer!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "employeeId",
				message: "Enter your employee ID (Required)",
				validate: (employeeId) => {
					if (employeeId) {
						return true;
					} else {
						console.log("Please enter your employee ID!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "email",
				message: "Enter your email address (Required)",
				validate: (email) => {
					if (email) {
						return true;
					} else {
						console.log("Please enter your email address!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "github",
				message: "Enter your Github username (Required)",
				validate: (github) => {
					if (github) {
						return true;
					} else {
						console.log("Please enter your Github username!");
						return false;
					}
				},
			},
		])
		.then((answers) => {
			console.log(answers);
			const engineer = new Engineer(
				answers.name,
				answers.employeeId,
				answers.email,
				answers.github
			);
			teamMembers.push(engineer);
			promptMenu();
		});
};

const promptIntern = () => {
	console.log(`
    ===============
    Add A New Intern
    ===============
    `);

	return inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is the name of the intern? (Required)",
				validate: (internName) => {
					if (internName) {
						return true;
					} else {
						console.log("Please enter the name of the intern!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "employeeId",
				message: "Enter your employee ID (Required)",
				validate: (employeeId) => {
					if (employeeId) {
						return true;
					} else {
						console.log("Please enter your employee ID!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "email",
				message: "Enter your email address (Required)",
				validate: (email) => {
					if (email) {
						return true;
					} else {
						console.log("Please enter your email address!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "school",
				message: "Enter your school name (Required)",
				validate: (school) => {
					if (school) {
						return true;
					} else {
						console.log("Please enter your school name!");
						return false;
					}
				},
			},
		])
		.then((answers) => {
			console.log(answers);
			const intern = new Intern(
				answers.name,
				answers.employeeId,
				answers.email,
				answers.school
			);
			teamMembers.push(intern);
			promptMenu();
		});
};

const buildTeam = () => {
	console.log(`
    ===============
    Team created!
    ===============
    `);

	if (!fs.existsSync(output)) {
		fs.mkdirSync(output);
	}
	fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
};

promptManager();
