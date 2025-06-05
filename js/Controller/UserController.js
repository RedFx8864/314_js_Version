const UserRepository = require('../Repository/UserRepository');
const Admin = require('../Model/Admin');
const Customer = require('../Model/Customer');
const EventHost = require('../Model/EventHost');

const repo = new UserRepository();

const UserController = {
  createUser(type, email, password) {
    let user;
    switch(type) {
      case 'Admin':
        user = new Admin(email, password);
        break;
      case 'Customer':
        user = new Customer(email, password);
        break;
      case 'EventHost':
        user = new EventHost(email, password);
        break;
      default:
        throw new Error('Invalid user type');
    }
    repo.addUser(user);
    return user;
  },

  getUser(id) {
    return repo.getUserById(id);
  },

  getAllUsers() {
    return repo.getAllUsers();
  }
};

module.exports = UserController;
