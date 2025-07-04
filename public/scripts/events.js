document.addEventListener("DOMContentLoaded", () => {
  fetch('/api/events')
    .then(res => res.json())
    .then(events => {
      const list = document.getElementById('eventsList');
      list.innerHTML = events.map(ev => `
        <div class="content">
          <hr>
          <h3>${ev.name}</h3>
          <p>${ev.description}</p>
          <p><strong>Date:</strong> ${ev.dates} <button class="small">Book</button></p>
         
          <hr>
        </div>`).join('');
    })
    
    .catch(err => console.error("Error fetching events:", err));
});
