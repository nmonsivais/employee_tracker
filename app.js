var inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["Add a department", "Add a role", "Add an employee", "View a department", "View a role", "View an employee", "Update and employee role",],
            name: "addAction"
        },

    ])
    .then(function (response) {
        console.log(response);

    })