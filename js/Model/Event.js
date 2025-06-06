class Event 
{
  constructor(id, name, description, hostId, dates) 
  {
    this.id = id;
    this.name = name;
    this.description = description;
    this.hostId = hostId;
    this.dates = dates;
  }
}

module.exports = Event;
