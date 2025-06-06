document.addEventListener("DOMContentLoaded", () => {
  fetch('/api/events')
    .then(res => res.json())
    .then(events => {
      const list = document.getElementById('eventsList');
      const userId = window.location.pathname.split('/')[2]; // Extract from /users/:id/Events

      list.innerHTML = events.map(ev => `
        <div class="content">
          <hr>
          <h3>${ev.name}</h3>
          <p>${ev.description}</p>
          <p><strong>Date:</strong> ${ev.dates}</p>

          <form class="booking-form">
            <input type="hidden" name="eventId" value="${ev.id}">
            <input type="hidden" name="eventName" value="${ev.name}">
            <input type="hidden" name="eventHostName" value="${ev.hostName}">
            <input type="hidden" name="customerId" value="${userId}">
            <button type="submit" class="small">Book</button>
          </form>
          <hr>
        </div>`).join('');
    })
    .catch(err => console.error("Error fetching events:", err));
});
