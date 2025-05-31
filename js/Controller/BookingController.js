class EventController
{
    static createEvent(id, title, date, hostId)
    {
        const event = new Event(id, title, date, hostId)
        BookingRepository.save(booking);
    }

}