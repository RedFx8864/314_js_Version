const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../../data/Users.json');

class UserRepository {
    static getAllUsers() {
        if (!fs.existsSync(filePath)) return [];
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    }

    static saveUser(user) {
        const users = this.getAllUsers();
        users.push(user);
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    }
}

module.exports = UserRepository;
