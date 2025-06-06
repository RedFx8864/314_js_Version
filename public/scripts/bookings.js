document.addEventListener("DOMContentLoaded", () => {
  const pathParts = window.location.pathname.split('/');
  const userId = pathParts[2];

  const bookingForm = document.getElementById("bookingForm");

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const eventId = document.getElementById("eventId").value;

    fetch("/createBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventId: eventId,
        customerId: userId,
        action: "createBooking"
      }),
    })
    .then(res => res.text())
    .then(data => {
      alert(data);
      location.reload();
    })
    .catch(err => console.error("Error creating booking:", err));
  });

  fetch(`/api/bookings/${userId}`)
    .then(res => res.json())
    .then(bookings => {
      const list = document.getElementById('bookingsList');
      list.innerHTML = bookings.map(bo => `
        <div>
          <h3>Booking ID: ${bo.id}</h3>
          <p>Event ID: ${bo.eventId}</p>
          <p>Customer ID: ${bo.customerId}</p>
          <hr>
        </div>
      `).join('');
    })
    .catch(err => console.error("Error fetching bookings:", err));
});
