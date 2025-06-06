const EventRepository = require('../Repository/EventRepository');

const EventController = {
  create: (req, res) => {
    const { name, description, hostId, hostName, dates } = req.body;

    if (!name || !description || !hostId || !hostName || !dates) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const id = Date.now();
    const newEvent = { id, name, description, hostId, hostName, dates };

    EventRepository.saveEvent(newEvent);
    res.status(201).json({ message: "Event created", event: newEvent });
  },

  getAll: (req, res) => {
    const events = EventRepository.getAllEvents();
    res.json(events);
  }
};

module.exports = EventController;
