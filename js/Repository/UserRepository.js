const fs = require('fs');
const path = require('path');

const USERS_FILE = path.join(__dirname, '../../data/Users.json');

class UserRepository {

    constructor()
    {
        if (!fs.existsSync(USERS_FILE))
            {
                fs.writeFileSync(USERS_FILE, JSON.stringify([]))
            }
    }
    
    getAllUsers() {
        const data = fs.readFileSync(USERS_FILE);
        return JSON.parse(data);
    }

    saveUser(user) {
        const users = this.getAllUsers();
        users.push(user);
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    }

    findByEmail(email)
    {
        const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));
        return users.find(user => user.email === email);
    }

    validateCredentials(email, password, role) 
    {
        const user = this.findByEmail(email);
        return user && user.password === password && user.role === role ? user : null;
    }
}

module.exports = new UserRepository;
