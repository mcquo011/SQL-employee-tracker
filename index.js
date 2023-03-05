const inquirer = require("inquirer");
const connection = require("./db/server");



// functions for each option
function viewAllDepartments() {
  connection.query("SELECT * FROM department", (err, results) => {
    if (err) throw err;
    console.table(results);
    promptUser();
  });
}

function viewAllRoles() {
  connection.query(
    "SELECT roles.id, roles.title, department.name AS department, roles.salary FROM roles JOIN department ON roles.department_id = department.id",
    (err, results) => {
      if (err) throw err;
      console.table(results);
      promptUser();
    }
  );
}


function viewAllEmployees() {
  connection.query(
    "SELECT employee.id, employee.first_name, employee.last_name, roles.title AS job_title, department.name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id LEFT JOIN employee AS manager ON employee.manager_id = manager.id",
    (err, results) => {
      if (err) throw err;
      console.table(results);
      promptUser();
    }
  );
}


function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the name of the department:",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO department SET ?",
        { name: answer.name },
        (err) => {
          if (err) throw err;
          console.log(`Department '${answer.name}' added successfully!`);
          promptUser();
        }
      );
    });
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
