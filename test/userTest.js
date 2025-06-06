const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '..', 'data', 'Users.json');
const bookingsPath = path.join(__dirname, '..', 'data', 'Bookings.json');

const randomId = () => Date.now() + Math.floor(Math.random() * 10000);
const randomName = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack', 'Kara', 'Liam'];
  return names[Math.floor(Math.random() * names.length)] + Math.floor(Math.random() * 100);
};
const randomEventName = () => {
  const titles = ['Tech Talk', 'Food Fest', 'Music Night', 'Art Expo', 'Code Camp', 'Startup Pitch', 'Gaming Bash'];
  return titles[Math.floor(Math.random() * titles.length)] + " " + Math.floor(Math.random() * 1000);
};

const eventHosts = [];
for (let i = 0; i < 10; i++) {
  const id = randomId();
  const name = randomName();
  eventHosts.push({
    id,
    name,
    email: `${name.toLowerCase()}@eventhopper.com`,
    role: 'EventHost'
  });
}
fs.writeFileSync(usersPath, JSON.stringify(eventHosts, null, 2));

const bookings = [];
for (let i = 0; i < 50; i++) {
  const bookingId = randomId();
  const host = eventHosts[Math.floor(Math.random() * eventHosts.length)];
  const customerId = `cust-${Math.floor(Math.random() * 100000)}`;
  const eventId = `evt-${Math.floor(Math.random() * 10000)}`;
  const eventName = randomEventName();

  bookings.push({
    id: bookingId,
    eventHostName: host.name,
    eventId: eventId,
    customerId: customerId,
    eventName: eventName
  });
}
fs.writeFileSync(bookingsPath, JSON.stringify(bookings, null, 2));

console.log("✅ Generated 10 EventHosts and 50 Bookings!");
