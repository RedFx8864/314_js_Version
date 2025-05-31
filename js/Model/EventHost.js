const User = require('./User');

class EventHost extends User 
{
  constructor(id, name) 
  {
    super(id, name);
    this.role = 'EventHost';
  }
}

module.exports = EventHost;
