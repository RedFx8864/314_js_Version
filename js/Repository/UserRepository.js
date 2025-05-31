const fs = require('fs');
const path = require('path');

const User = require('../Model/User');
const Admin = require('../Model/Admin');
const Customer = require('../Model/Customer');
const EventHost = require('../Model/EventHost');

const DATA_FILE = path.join(__dirname, '../../data/users.json');

class UserRepository {
  constructor() {
    this.users = [];
    this.loadUsers();
  }

  loadUsers() {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE);
      const data = JSON.parse(raw);
      this.users = data.map(u => {
        switch (u.type) {
          case 'Admin': return new Admin(u.id, u.name);
          case 'Customer': return new Customer(u.id, u.name);
          case 'EventHost': return new EventHost(u.id, u.name);
          default: return new User(u.id, u.name);
        }
      });
    }
  }

  saveUsers() {
    fs.writeFileSync(DATA_FILE, JSON.stringify(this.users, null, 2));
  }

  addUser(user) {
    this.users.push(user);
    this.saveUsers();
  }

  getUserById(id) {
    return this.users.find(u => u.id === id);
  }

  getAllUsers() {
    return this.users;
  }
}

module.exports = UserRepository;
