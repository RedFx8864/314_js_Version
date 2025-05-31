class Booking
{
    constructor(id, eventId, customerId, bookingDate = newDate())
    {
        this.id = id;
        this.eventId = eventId;
        this.customerId = customerId;
        this.bookingDate = bookingDate;
    }
}