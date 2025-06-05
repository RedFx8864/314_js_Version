const User = require('../Model/User');
const UserRepository = require('../Repository/UserRepository');

class UserController {
    static createUser(req, res) {
        const { id, name, role, email, password } = req.body;

        if (!email || !password || !id || !name || !role) {
            return res.status(400).send('Missing user fields');
        }

        const newUser = new User(id, name, role, email, password);
        UserRepository.saveUser(newUser);

        res.redirect('/Home')
    }
}

module.exports = UserController;
