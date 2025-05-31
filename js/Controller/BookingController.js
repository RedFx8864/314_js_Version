const BookingRepository = require('../Repository/BookingRepository');
const Booking = require('../Model/Booking');

const repo = new BookingRepository();

const BookingController = {
  createBooking(id, eventId, customerId) {
    const booking = new Booking(id, eventId, customerId);
    repo.addBooking(booking);
    return booking;
  },

  getBooking(id) {
    return repo.getBookingById(id);
  },

  getAllBookings() {
    return repo.getAllBookings();
  }
};

module.exports = BookingController;
