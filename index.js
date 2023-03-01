const inquirer = require("inquirer");
const connection = require("./db/server");



// functions for each option
function viewAllDepartments() {
  connection.query("SELECT * FROM department", (err, results) => {
    if (err) throw err;
    console.table(results);
  });
}

function viewAllRoles() {
 
}

function viewAllEmployees() {
  
}

function addDepartment() {
  
}

function addRole() {
  
}

function addEmployee() {
  
}

function updateEmployeeRole() {
  
}

// main prompt function
function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.action) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateEmployeeRole();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
}


promptUser();
