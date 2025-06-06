const fs = require('fs');
const path = require('path');
const Booking = require('../Model/Booking');

const DATA_FILE = path.join(__dirname, '../../data/bookings.json');

class BookingRepository {

  constructor()
      {
          if (!fs.existsSync(DATA_FILE))
              {
                  fs.writeFileSync(DATA_FILE, JSON.stringify([]))
              }
      }

  getAllBookings() 
  {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE);
      return JSON.parse(data);
    }
  }

  saveBooking(booking) 
  {
    const bookings = this.getAllBookings();
    bookings.push(booking);
    fs.writeFileSync(DATA_FILE, JSON.stringify(bookings, null, 2));
  }

  getBookingById(id) 
  {
    const bookings = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    return bookings.find(booking => booking.id === id);
  }
}

module.exports = new BookingRepository();
