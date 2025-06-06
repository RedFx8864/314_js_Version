class Booking 
{
  constructor(id, eventId, customerId) 
  {
    this.id = id;
    this.eventId = eventId;
    this.customerId = customerId;
  }

  createBooking(id, eventId, customerId)
  {
    return new Booking(id, eventId, customerId);
  }

}

module.exports = Booking;
