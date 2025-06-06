const Booking = require('../Model/Booking');
const BookingRepository = require('../Repository/BookingRepository');

class BookingController {
  createBooking(req, res) {
    const { id, eventHostName, eventId, customerId, eventName } = req.body;

    if (!eventId || !eventName || !eventHostName || !customerId) {
      return res.status(400).json({ error: "Missing booking data" });
    }

    const booking = new Booking(id, eventHostName, eventId, customerId, eventName);
    BookingRepository.saveBooking(booking);
    res.status(201).json(booking);
  }

  getBookingsByUserId(req, res) {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: "Missing userId" });
  }

  const allBookings = BookingRepository.getAllBookings();
  const userBookings = allBookings.filter(b => String(b.customerId) === String(userId));

  res.json(userBookings);
}

  

  
}

module.exports = new BookingController();
