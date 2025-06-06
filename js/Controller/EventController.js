const EventRepository = require('../Repository/EventRepository');

const EventController = {
  create: (req, res) => {
    const { name, description, hostId, dates } = req.body;

    if (!name || !description || !hostId || !dates) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const id = Date.now(); // Timestamp as unique ID
    const newEvent = { id, name, description, hostId, dates };

    EventRepository.saveEvent(newEvent);
    res.status(201).json({ message: "Event created", event: newEvent });
  },

  getAll: (req, res) => {
    const events = EventRepository.getAllEvents();
    res.json(events);
  }
};

module.exports = EventController;
