const fs = require('fs');
const path = require('path');

const EVENTS_FILE = path.join(__dirname, '../../data/Events.json');

class EventRepository {
  getAllEvents() {
    if (!fs.existsSync(EVENTS_FILE)) return [];
    const data = fs.readFileSync(EVENTS_FILE);
    return JSON.parse(data);
  }

  saveEvent(event) {
    const events = this.getAllEvents();
    events.push(event);
    fs.writeFileSync(EVENTS_FILE, JSON.stringify(events, null, 2));
  }
}

module.exports = new EventRepository();
