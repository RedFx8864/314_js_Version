class User
{
    constructor(id,name,role, email, password)
    {
        this.id = id;
        this.name = name;
        this.role = role;
        this.email = email;
        this.password = password;

    }

    createUser(email, password, id)
    {
        return new User(id, "Default Name", "Customer", email, password )

    }
}

module.exports = User;