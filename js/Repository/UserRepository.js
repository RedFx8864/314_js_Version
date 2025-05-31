const users = [];

class UserRepository {
  addUser(user) {
    users.push(user);
  }

  getAllUsers() {
    return users;
  }

  getUserById(id) {
    return users.find(user => user.id === id);
  }
}

module.exports = UserRepository;
