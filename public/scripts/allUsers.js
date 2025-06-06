document.addEventListener("DOMContentLoaded", () => {
  fetch('/api/users')
    .then(res => res.json())
    .then(users => {
      const userList = document.getElementById("user-list");
      userList.innerHTML = users.map(user => `
      
        <div class="user-card">
          <hr>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
        </div>
        <hr>
      `).join('');
    })
    .catch(err => {
      console.error("Error fetching users:", err);
      document.getElementById("user-list").textContent = "Failed to load users.";
    });
});
