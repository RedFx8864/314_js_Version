const EventRepository = require('../Repository/EventRepository');
const Event = require('../Model/Event');

const repo = new EventRepository();

const EventController = {
  createEvent(id, name, hostId) {
    const event = new Event(id, name, hostId);
    repo.addEvent(event);
    return event;
  },

  getEvent(id) {
    return repo.getEventById(id);
  },

  getAllEvents() {
    return repo.getAllEvents();
  }
};

module.exports = EventController;
