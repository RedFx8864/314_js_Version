document.addEventListener("DOMContentLoaded", () => {
  const userId = window.location.pathname.split('/')[2];

  fetch('/api/events')
    .then(res => res.json())
    .then(events => {
      const list = document.getElementById('eventsList');

      list.innerHTML = events.map(ev => `
        <div class="content">
          <hr>
          <h3>${ev.name}</h3>
          <p>${ev.description}</p>
          <p><strong>Date:</strong> ${ev.dates}</p>

          <form class="booking-form">
            <input type="hidden" name="eventId" value="${ev.id}">
            <input type="hidden" name="eventName" value="${ev.name}">
            <input type="hidden" name="eventHostName" value="${ev.hostName || 'Unknown'}">
            <input type="hidden" name="customerId" value="${userId}">
            <button type="submit" class="small">Book</button>
          </form>
          <hr>
        </div>`).join('');
    })
    .catch(err => console.error("Error fetching events:", err));

  // Unified form handler
  document.addEventListener('submit', function (e) {
    if (e.target && e.target.classList.contains('booking-form')) {
      e.preventDefault();

      const form = e.target;
      const booking = {
        id: Date.now(),
        eventId: form.eventId.value,
        eventName: form.eventName.value,
        eventHostName: form.eventHostName.value,
        customerId: form.customerId.value
      };

      fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking)
      })
        .then(res => {
          if (!res.ok) throw new Error("Booking failed");
          return res.json();
        })
        .then(data => {
          alert("Booking created!");
        })
        .catch(err => console.error("Error creating booking:", err));
    }
  });
});
