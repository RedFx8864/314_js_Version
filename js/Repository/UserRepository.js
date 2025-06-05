const fs = require('fs');
const path = require('path');

const Admin = require('../Model/Admin');
const Customer = require('../Model/Customer');
const EventHost = require('../Model/EventHost');

class UserRepository {
  constructor() {
    this.filePath = path.join(__dirname, '../../data/users.json');
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, JSON.stringify([]));
    }
  }

  _instantiateUser(data) {
    switch(data.role) {
      case 'Admin': return Admin.fromJSON(data);
      case 'Customer': return Customer.fromJSON(data);
      case 'EventHost': return EventHost.fromJSON(data);
      default: throw new Error(`Unknown user role: ${data.role}`);
    }
  }

  getAllUsers() {
    const data = fs.readFileSync(this.filePath, 'utf-8');
    const usersRaw = JSON.parse(data);
    return usersRaw.map(u => this._instantiateUser(u));
  }

  createUser(email, password, role) {
    const users = this.getAllUsers();
    let newUser;
    switch(role) {
      case 'Admin':
        newUser = new Admin(email, password);
        break;
      case 'Customer':
        newUser = new Customer(email, password);
        break;
      case 'EventHost':
        newUser = new EventHost(email, password);
        break;
      default:
        throw new Error('Invalid role');
    }
    users.push(newUser);
    fs.writeFileSync(this.filePath, JSON.stringify(users.map(u => u.toJSON()), null, 2));
    return newUser;
  }
}

module.exports = UserRepository;
