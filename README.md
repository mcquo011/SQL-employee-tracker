
# Employee Tracker
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  [Walkthrough Video](https://watch.screencastify.com/v/NgsGrpeHc0P5pnQrD98Q)

 ## Table of Contents 📑

  * [Description](#description)
  * [Dependencies](#dependencies)
  * [Usage](#usage)
  * [Contributers](#contributers)
  * [License](#license)
  * [Questions](#questions)

  ## Description 

  The Employee Management System is a command-line application that allows you to manage your company's employee database. It was built using Node.js and MySQL and provides a user-friendly interface to perform various CRUD (Create, Read, Update, Delete) operations on departments, roles, and employees.

The application uses the inquirer package to prompt the user for input and the console.table package to display data in a formatted table. The MySQL database is used to store and retrieve data, and the mysql2 package is used to connect to and interact with the database.

The Employee Management System offers the following features:

* View all departments, roles, and employees
* Add a new department, role, or employee
* Update an employee's role

Future development could including adding the option to update managers, view employees by manager and deleting departments, roles, and employees. 


  ## Dependencies  

  * npm install inquirer@8.2.4
  * npm install mysql2
  * npm install console.table

  ## Usage 

  To use this app, run npm start in the command line. The user will then be prompted to select from the following list:

  1. View all departments
  2. View all roles
  3. View all employees
  4. Add a department
  5. Add a role
  6. Add an employee
  7. Update an employee role

  The user can continue to pick from this list until they select "exit" which will end the connection. 

  ## Built With

  * Node.js
  * mysql2
  * Inquirer
  * JavaScript

  ## Screenshots 

  ![Alt text](./images/Screen%20Shot%202023-03-07%20at%2010.54.07%20AM.png?raw=true "screenshot of first three prompts")

  ![Alt text](./images/Screen%20Shot%202023-03-07%20at%2010.55.14%20AM.png?raw=true "screenshot of update employees")

  Watch [walkthrough video]() to see the other prompts


  ## Contributers 

  Maggie McQuown

  ## License 
  
  Copyright (c)
  [MIT](https://opensource.org/licenses/MIT)

  ## Questions 

  You can visit my Github Profile here: [mcquo011](https://github.com/mcquo011/) 
  If you have any questions please email me at omcquown@gmail.com
  