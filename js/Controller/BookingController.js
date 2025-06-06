const Booking = require('../Model/Booking');
const BookingRepository = require('../Repository/BookingRepository');

class BookingController
{
  newBookingTest(req, res)
  {
    const {customerId, eventId} = req.body;
    if(!customerId || !eventId)
    {
      return res.status(400).send("Missing event or customer id");
    }

    const id = Date.now();
    const booking = new Booking(id, eventId, customerId);
    BookingRepository.saveBooking(booking);

    res.status(201).send("Booking made successfully");
  }
}

module.exports = new BookingController;
