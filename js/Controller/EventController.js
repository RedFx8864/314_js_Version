class BookingController
{
    static createBooking(id, eventId, customerId)
    {
        const booking = new Booking(id, eventId, customerId);
        BookingRepository.save(booking);
    }
    
}