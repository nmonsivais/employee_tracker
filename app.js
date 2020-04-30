var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "employee_Tracker"
});

// connect to the mysql server and sql database ***connecion.query***
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

function start() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do?",
                choices: ["Add a department", "Add a role", "Add an employee", "View all departments", "View all roles", "View all employees", "Update an employee role", "Exit App",],
                name: "addViewUpdate"
            },

        ])
        //function response will record what choice user responded.
        .then(function (response) {
            switch (response.addViewUpdate) {
                case "Add a department":
                    console.log("You are about to add department.")
                    addDepartment();
                    break;
                case "Add a role":
                    console.log("You are about to add a role.")
                    addRole();
                    break;
                case "Add an employee":
                    console.log("You are about to add an employee.")
                    addEmployee();
                    break;
                case "View all departments":
                    console.log("You are about to view all departments.")
                    viewDepartments();
                    break;
                //need to creat view all roles function
                case "View all roles":
                    console.log("You are about to view all roles.")
                    viewAllRoles()
                    break;
                case "View all employees":
                    console.log("You are about to view all employees")
                    viewAllEmployees();
                    break;
                case "Update an employee role":
                    console.log("You are about to update an employee role.")
                    updateEmployeeRole();
                    break;
                case "Exit App":
                    console.log("You are exiting the app.")
                    exitApp()
                    break;
            }

            console.log(response.addViewUpdate);
            //create switch statements to go to next question depending on response.
        })

}

function addDepartment() {
    //Add a Department//
    inquirer
        .prompt([
            {
                type: "input",
                message: "What department would you like to add?",
                name: "addDepartment"
            },
        ])
        .then(function (response) {
            console.log(response.addDepartment);
            connection.query(
                "INSERT INTO department SET ?",
                {
                    dept_name: response.addDepartment
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your data was transferred successfully!");
                    start()
                }
            )
        })
}

function addRole() {
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
            {
                type: "number",
                message: "What is the ID department of this role?",
                name: "idDepartment"
            },
        ])
        .then(function (response) {
            console.log(response.addRole)
            connection.query(
                "INSERT INTO emp_role SET ?",
                {
                    title: response.addRole,
                    salary: response.roleSalary,
                    department_id: response.idDepartment
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your role was created successfully!");
                    start()
                }
            )
        })
}

function addEmployee() {
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
                type: "number",
                message: "What is the employee's role ID #?",
                name: "employeeRole"
            },
            {
                type: "number",
                message: "What is the employee's manager ID #? If none, type 0",
                name: "employeeManager"
            },
        ])
        .then(function (response) {
            console.log(response)
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: response.firstName,
                    last_name: response.lastName,
                    role_id: response.employeeRole,
                    manager_id: response.employeeManager
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your employee was added successfully!");
                    start()
                }
            )

        })
}

function viewDepartments() {
    connection.query(
        "SELECT * FROM department",
        function (err, results) {
            if (err) throw err;
            console.log("Here is your table:", results);
            console.table(results);
            start()
        }
    )
    // console.table
}

function viewAllRoles() {
    connection.query(
        "SELECT * FROM emp_role",
        function (err, results) {
            if (err) throw err;
            console.log("Here is your table:", results);
            console.table(results);
            start()
        }
    )
    // console.table
}

function viewAllEmployees() {
    connection.query(
        "SELECT * FROM employee",
        function (err, results) {
            if (err) throw err;
            console.log("Here is your table:", results);
            console.table(results);
            start()
        }
    )
    // console.table
}

function updateEmployeeRole() {
    connection.query(
        "SELECT * FROM employee",
        function (err, results) {
            if (err) throw err;
            inquirer
                .prompt([
                    {
                        name: "employee",
                        type: "rawlist",
                        choices: function () {
                            var choiceArray = [];
                            for (var i = 0; i < results.length; i++) {
                                choiceArray.push(results[i].first_name);
                            }
                            return choiceArray;
                        },
                        message: "Please select a user."
                    },
                    {
                        type: "input",
                        message: "What role would you like to change it to.",
                        name: "roleUpdate"
                    }
                ])
                .then(function (response) {
                    console.log("\n Updating role id...\n");
                    console.log("Role ID for " + response.employee + " has been updated to " + response.roleUpdate);
                    connection.query(
                        "UPDATE employee SET ? WHERE ?",
                        [
                            {
                                role_id: response.roleUpdate
                            },
                            {
                                first_name: response.employee
                            },
                            function (err) {
                                if (err) throw err;
                                console.log("Your employee role was updated successfully.");
                                start()
                            }
                        ]
                    )
                })
            //keep both lines below in case of errors.
        })
}

function exitApp() {
    setTimeout((function () {
        return process.kill(process.pid);
    }), 1000);
}