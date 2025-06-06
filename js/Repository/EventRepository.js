const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '/../../data/Events.json');

const EventRepository = {
  getAllEvents: () => {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath);
    return JSON.parse(data || '[]');
  },

  saveEvent: (event) => {
    const events = EventRepository.getAllEvents();
    events.push(event);
    fs.writeFileSync(filePath, JSON.stringify(events, null, 2));
  }
};

module.exports = EventRepository;
