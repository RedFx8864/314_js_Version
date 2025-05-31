class BookingRepository
{
    static getAll()
    {
        const data = localStorage.getItem('bookings');
        return data ? JASON.parse(data) : [];
    }

    static save(booking)
    {
        const bookings = BookingRepository.getAll();
        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));
    }
}