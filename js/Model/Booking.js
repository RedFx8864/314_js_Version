class Booking {
  constructor(id, eventHostName, eventId, customerId, eventName) {
    this.id = id;
    this.eventHostName = eventHostName;
    this.eventId = eventId;
    this.customerId = customerId;
    this.eventName = eventName;
  }
}

module.exports = Booking;
