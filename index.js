const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const UserController = require('./js/Controller/UserController');
const EventController = require('./js/Controller/EventController');
const BookingController = require('./js/Controller/BookingController');


const UserRepository = require('./js/Repository/UserRepository');
const EventRepository = require('./js/Repository/EventRepository');




const app = express();
const PORT = 3000;


app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json()); // parse JSON bodies
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) =>
{
  res.sendFile(path.join(__dirname, "public", "htmlPages", "index.html"))

})

app.get("/users/:id/Users", (req, res)=>
{
  res.sendFile(path.join(__dirname, "public", "htmlPages", "Users.html"))
})

app.get("/users/:id/Home", (req, res)=>
{
  res.sendFile(path.join(__dirname, "public", "htmlPages", "Home.html"))
})

app.get("/users/:id/Events", (req, res)=>
{
  res.sendFile(path.join(__dirname, "public", "htmlPages", "Events.html"))
})

app.get("/users/:id/Bookings", (req, res)=>
{
  res.sendFile(path.join(__dirname, "public", "htmlPages", "Bookings.html"))
})

app.get("/users/:id/Contact", (req, res)=>
{
  res.sendFile(path.join(__dirname, "public", "htmlPages", "Contact.html"))
})

app.get("/users/:id/Bookings", (req, res)=>
{
  res.sendFile(path.join(__dirname, "public", "htmlPages", "Bookings.html"))
})

app.get("/users/:id/Contact", (req, res)=>
{
  res.sendFile(path.join(__dirname, "public", "htmlPages", "Contact.html"))
})

app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const users = UserRepository.getAllUsers();
  const user = users.find(u => u.id.toString() === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.post("/createBooking", (req, res) => 
{
  const action = req.body.action;

  if (action === "createBooking")
  {
    BookingController.newBookingTest(req, res);
  }
  else
  {
    res.status(400).send("Invalid action");
  }
}
)

app.post("/submit", (req, res) =>
{
  const action = req.body.action;

  if (action === "login")
  {
    UserController.login(req, res)
  }


  else if (action === "register")
  {
    UserController.register(req, res);
  }


  else
  {
    res.status(400).send("Invalid action");
  }

});

app.post("/api/events", EventController.create);


app.get("/api/events", (req, res)=>
{
  const events = EventRepository.getAllEvents();
  res.json(events)
});



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

