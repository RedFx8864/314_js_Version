const fs = require('fs');
const path = require('path');
const Event = require('../Model/Event');

const DATA_FILE = path.join(__dirname, '../../data/events.json');

class EventRepository {
  constructor() {
    this.events = [];
    this.loadEvents();
  }

  loadEvents() {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE);
      const data = JSON.parse(raw);
      this.events = data.map(e => new Event(e.id, e.name, e.hostId));
    }
  }

  saveEvents() {
    fs.writeFileSync(DATA_FILE, JSON.stringify(this.events, null, 2));
  }

  addEvent(event) {
    this.events.push(event);
    this.saveEvents();
  }

  getEventById(id) {
    return this.events.find(e => e.id === id);
  }

  getAllEvents() {
    return this.events;
  }
}

module.exports = EventRepository;
