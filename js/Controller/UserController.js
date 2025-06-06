const User = require('../Model/User');
const UserRepository = require('../Repository/UserRepository');

class UserController 
{
   register(req, res)
   {
    const {email, password, name, role} = req.body;
    if (!email || !password || !role)
    {
        return res.status(400).send("Missing Email or password")
    }

    if (UserRepository.findByEmail(email))
    {
        return res.status(409).send("User already Exists")
    }

    const id = Date.now();
    const user = new User(id, name || role || email, password);
    UserRepository.saveUser(user);

    res.status(201).send("User Registered Susessfuly");
    res.redirect(`/users/${user.id}/Home`)
   }

   login(req, res)
   {
    const {email, password, role} = req.body;
    const user = UserRepository.validateCredentials(email, password, role);
    if (user)
    {
        return res.redirect(`/users/${user.id}/Home`);
    }

    else
    {
        res.status(401).send("Invalid credentials");
    }
   }


}


module.exports = new UserController;
