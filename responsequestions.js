// ["Add a department", "Add a role", "Add an employee", "View a department", "View a role", "View an employee", "Update an employee role",]

//Add a Department//
inquirer
    .prompt([
        {
            type: "input",
            message: "What department would you like to add?",
            name: "addDepartment"
        },

    ])
//Add a Role//
inquirer
    .prompt([
        {
            type: "input",
            message: "What role title would you like to add?",
            name: "addRole"
        },
        {
            type: "number",
            message: "What is the salary of this role?",
            name: "roleSalary"
        },
        // {
        //     type: "number",
        //     message: "What is the ID department of this role?",
        //     name: "idDepartment"
        // },

    ])
//Add a Employee//
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the employee's first name?",
            name: "firstName"
        },
        {
            type: "input",
            message: "What is the employee's last name?",
            name: "lastName"
        },
        {
            type: "list",
            message: "What is the employee's role?",
            choice: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead",]
        },
        {
            type: "list",
            message: "Who is the employee's manager?",
            choice: ["None", "Alec Down", "Terrence Bear", "Pete Wanca", "Ricardo Arjona", "Lin Manuel Miranda", "Juan Carlos y Jose",]
        },
    ])
//View Departments//
console.table

//View Roles//
console.table

//View Employees//
console.table

//Update an Employee Role//
inquirer
    .prompt([
        {
            type: "list",
            message: "Which employee's role would you like to update?",
            choice: ["?"],
            name: "employeeUpdate"
        },
        {
            type: "list",
            message: "Which role would you like to set for selected employee?",
            choice: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead",],
            name: "roleUpdate"
        },
    ])