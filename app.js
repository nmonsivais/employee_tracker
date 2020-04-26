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
                    break
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
}