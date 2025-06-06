document.addEventListener("DOMContentLoaded", () => {
  const pathParts = window.location.pathname.split('/');
  const userId = pathParts[2]; // Assuming path is /users/:id/Bookings

  fetch(`/api/bookings?userId=${userId}`)
    .then(res => res.json())
    .then(bookings => {
      const list = document.getElementById("bookingsList");

      if (bookings.length === 0) {
        list.innerHTML = "<p>No bookings found.</p>";
        return;
      }

      list.innerHTML = bookings.map(b => `
        <div class="content">
          <hr>
          <h3>Event: ${b.eventName}</h3>
          <p><strong>Event ID:</strong> ${b.eventId}</p>
          <p><strong>Hosted by:</strong> ${b.eventHostName}</p>
          <p><strong>Booking ID:</strong> ${b.id}</p>
          <hr>
        </div>
      `).join('');
    })
    .catch(err => {
      console.error("Error fetching bookings:", err);
      document.getElementById("bookingsList").innerHTML = "<p>Error loading bookings.</p>";
    });
});
