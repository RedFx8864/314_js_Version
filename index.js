const {createUser, listUsers} = require('./js/Controller/UserController');

console.log("Welcome to the Event Management Platform!");

// Example usage:
UserController.createUser(1, 'Alice', 'Customer');
UserController.createUser(2, 'Bob', 'EventHost');
