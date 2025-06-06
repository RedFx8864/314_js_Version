const fs = require('fs');
const path = require('path');

const BOOKINGS_FILE = path.join(__dirname, '../../data/Bookings.json');

class BookingRepository {
  constructor() {
    if (!fs.existsSync(BOOKINGS_FILE)) {
      fs.writeFileSync(BOOKINGS_FILE, JSON.stringify([]));
    }
  }

  getAllBookings() {
    const data = fs.readFileSync(BOOKINGS_FILE);
    return JSON.parse(data);
  }

  saveBooking(booking) {
    const bookings = this.getAllBookings();
    bookings.push(booking);
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
  }
}

module.exports = new BookingRepository();
