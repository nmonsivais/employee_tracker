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
                choices: ["Add a department", "Add a role", "Add an employee", "View a department", "View a role", "View an employee", "Update an employee role",],
                name: "addViewUpdate"
            },

        ])
        //function response will record what choice user responded.
        .then(function (response) {
            switch (response.addViewUpdate) {
                case "Add a department":
                    console.log("About to add department")
                    addDepartment();
                    break;
                case "Add a role":
                    console.log("Your role is...")
                    addRole();
                    break;
                case "View a department":
                    console.log("About to view a department")
                    viewDepartments();
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