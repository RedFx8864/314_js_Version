const User = require('./User');

class Customer extends User 
{
  constructor(id, name) 
  {
    super(id, name);
    this.role = 'Customer';
  }
}

module.exports = Customer;
