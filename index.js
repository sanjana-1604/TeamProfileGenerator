const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer
  .prompt([
    {
      name: "name",
      message: "What is the team manager name? ",
    },
    {
      name: "empId",
      message: "What is team manager's ID? ",
    },
    {
      name: "emailId",
      message: "What is team manager's email? ",
    },
    {
      name: "officeNumber",
      message: "What is team manager's office number? ",
    }
    
  ])
  .then((data) => {
    console.log(data)
    /* const manager = new Manager(
      data.officeNumber,
      data.name,
      data.empId,
      data.emailId
    ); */

    const teamchoice = ()=>{
        inquirer.prompt([
            {     
                type: "list",
                message: "Which type of team member would you like to add",
                name: "teamMember",
                choices: [
                  "Engineer",
                  "Intern",
                  "I don't want to add any more team member",
                ]
            
          }
        ]).then((data)=>{
            console.log(data)
            if (data.teamMember === "Engineer") 
            {
                teamchoice()
            }
        })
    }

    

    /*     if (data.teamMember === "Engineer") {
      inquirer
        .prompt([
          {
            name: "name",
            message: "What is your engineer's name?",
          },
          {
            name: "empId",
            message: "What is your engineer's id ",
          },
          {
            name: "emailId",
            message: "What is engineer's email? ",
          },
          {
            name: "github",
            message: "What is your engineer's Github username? ",
          },
        ])
        .then((engineer_data) => {
          const engineer = new Engineer(
            engineer_data.github,
            engineer_data.name,
            engineer_data.empId,
            engineer_data.emailId
          );
        });
    } else if (data.teamMember === "Intern") {
      inquirer
        .prompt([
          {
            name: "name",
            message: "What is your intern's name?",
          },
          {
            name: "empId",
            message: "What is your intern's id ",
          },
          {
            name: "emailId",
            message: "What is intern's email? ",
          },
          {
            name: "school",
            message: "What is your intern's school name? ",
          },
        ])
        .then((intern_data) => {
          const intern = new Intern(
            intern_data.school,
            intern_data.name,
            intern_data.empId,
            intern_data.emailId
          );
        });
    } else {
      process.exit();
    } */
  });
