const User = require('./User');

class Admin extends User 
{
  constructor(id, name) 
  {
    super(id, name);
    this.role = 'Admin';
  }
}

module.exports = Admin;
