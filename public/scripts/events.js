document.addEventListener("DOMContentLoaded", () => {
  fetch('/api/events')
    .then(res => res.json())
    .then(events => {
      const list = document.getElementById('eventsList');
      list.innerHTML = events.map(ev => `
        <div>
          <h3>${ev.name}</h3>
          <p>${ev.description}</p>
          <p><strong>Date:</strong> ${ev.dates}</p>
          <hr>
        </div>`).join('');
    })
    
    .catch(err => console.error("Error fetching events:", err));
});
