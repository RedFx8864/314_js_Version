const fs = require('fs');
const path = require('path');
const Booking = require('../Model/Booking');

const DATA_FILE = path.join(__dirname, '../../data/bookings.json');

class BookingRepository {
  constructor() {
    this.bookings = [];
    this.loadBookings();
  }

  loadBookings() {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE);
      const data = JSON.parse(raw);
      this.bookings = data.map(b => new Booking(b.id, b.eventId, b.customerId));
    }
  }

  saveBookings() {
    fs.writeFileSync(DATA_FILE, JSON.stringify(this.bookings, null, 2));
  }

  addBooking(booking) {
    this.bookings.push(booking);
    this.saveBookings();
  }

  getBookingById(id) {
    return this.bookings.find(b => b.id === id);
  }

  getAllBookings() {
    return this.bookings;
  }
}

module.exports = BookingRepository;
