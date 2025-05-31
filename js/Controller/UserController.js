const UserRepository = require('../Repository/UserRepository');
const Admin = require('../Model/Admin');
const Customer = require('../Model/Customer');
const EventHost = require('../Model/EventHost');

const repo = new UserRepository();

const UserController = {
  createUser(type, id, name) {
    let user;
    switch(type) {
      case 'Admin':
        user = new Admin(id, name);
        break;
      case 'Customer':
        user = new Customer(id, name);
        break;
      case 'EventHost':
        user = new EventHost(id, name);
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
