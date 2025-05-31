class Event 
{
  constructor(id, name, hostId) 
  {
    this.id = id;
    this.name = name;
    this.hostId = hostId; // links to EventHost.id
  }
}

module.exports = Event;
