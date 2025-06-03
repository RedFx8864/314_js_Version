const express = require('express');
const path = require('path');

const UserController = require('/js/Controller/UserController');
const EventController = require('/js/Controller/EventController');
const BookingController = require('/js/Controller/BookingController');

const app = express();
const PORT = 3000;

app.use(express.json()); // parse JSON bodies
app.use(express.static(path.join(__dirname, 'public')));

// Serve static frontend page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/htmlPages/index.html'));
});

app.get('/Home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/htmlPages/Home.html'));
});


app.get('/Users', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/htmlPages/Users.html'));
});

app.get('/Events', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/htmlPages/Events.html'));
});

app.get('/Bookings', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/htmlPages/Bookings.html'));
});

app.get('/Contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/htmlPages/Contact.html'));
});

// API routes
app.post('/api/users/admin', (req, res) => {
  const { id, name } = req.body;
  try {
    const admin = UserController.createAdmin(id, name);
    res.json(admin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


try
{
    const newUser = UserController.createUser('Admin','Admin001', 'Alice');
    console.log('User Created: ', newUser);

}catch(err)
{
    console.error('Error creating user: ', err.message)
}

app.post('/api/users/eventhost', (req, res) => {
  const { id, name } = req.body;
  try {
    const host = UserController.createEventHost(id, name);
    res.json(host);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/api/users/customer', (req, res) => {
  const { id, name } = req.body;
  try {
    const customer = UserController.createCustomer(id, name);
    res.json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/api/events', (req, res) => {
  const { id, name, hostId } = req.body;
  try {
    const event = EventController.createEvent(id, name, hostId);
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/api/bookings', (req, res) => {
  const { id, eventId, customerId } = req.body;
  try {
    const booking = BookingController.createBooking(id, eventId, customerId);
    res.json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/users', (req, res) => {
  res.json(UserController.getAllUsers());
});

app.get('/api/events', (req, res) => {
  res.json(EventController.getAllEvents());
});

app.get('/api/bookings', (req, res) => {
  res.json(BookingController.getAllBookings());
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
