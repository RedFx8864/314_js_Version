const User = require("./js/Model/User");
const UserRepository = require("./js/Repository/UserRepository");

const repo = new UserRepository();

function createUser(id, name, role) {
  const user = new User(id, name, role);
  repo.addUser(user);
  console.log(`User created: ${user.name} (ID: ${user.id}, Role: ${user.role})`);
}

function listUsers() {
  const users = repo.getAllUsers();
  console.log("All users:");
  users.forEach((user, i) =>
    console.log(`${i + 1}. ID: ${user.id}, Name: ${user.name}, Role: ${user.role}`)
  );
}

module.exports = { createUser, listUsers };
