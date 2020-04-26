var inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["Add a department", "Add a role", "Add an employee", "View a department", "View a role", "View an employee", "Update an employee role",],
            name: "addAction"
        },

    ])
    //function response will record what choice user responded.
    .then(function (response) {
        console.log(response);
        //create if/else statements to go to next question depending on response.
    })