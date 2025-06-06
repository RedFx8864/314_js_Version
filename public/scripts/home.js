document.addEventListener("DOMContentLoaded", () => {
  const pathParts = window.location.pathname.split('/');
  const userId = pathParts[2];

  fetch(`/api/users/${userId}`)
    .then(res => res.json())
    .then(user => {
      document.getElementById("userName").textContent = `Welcome, ${user.name}!`;
      document.getElementById("email").textContent = `Email: ${user.email}`;
      document.getElementById("role").textContent = `Role: ${user.role}`;

      if (user.role === "EventHost") {
        const section = document.getElementById("eventHostSection");

        section.innerHTML = `
          <h2>Create Event</h2>
          <form id="createEventForm">
            <label>Name: <input type="text" name="name" required></label><br>
            <label>Description: <input type="text" name="description" required></label><br>
            <label>Dates: <input type="text" name="dates" required></label><br>
            <button type="submit">Create</button>
          </form>
        `;

        document.getElementById("createEventForm").addEventListener("submit", (e) => {
          e.preventDefault();
          const form = e.target;
          const name = form.name.value;
          const description = form.description.value;
          const dates = form.dates.value;

          fetch("/api/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, description, dates, hostId: user.id })
          })
            .then(res => res.json())
            .then(data => {
              alert("Event created!");
              form.reset();
            })
            .catch(err => {
              console.error("Error creating event:", err);
              alert("Error submitting event.");
            });
        });
      }
    })
    .catch(err => {
      console.error("Failed to fetch user:", err);
    });
});
