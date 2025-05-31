window.onload = () => 
{
    const user = new User(1, 'Alice', 'EventHost');
    EventController.createEvent(101, 'Music Night', '2024-07-01', user.id);

    const customer = new User(2, 'Bob', Customer);
    BookingController.createBooking(1001, 101, customer.id)

    console.log('Events: ', EventRepository.getAll());
    console.log('Bookings: ', BookingRepository.getAll());
};