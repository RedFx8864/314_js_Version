document.addEventListener("DOMContentLoaded", () => {
  // Extract user ID from URL path
  const pathParts = window.location.pathname.split('/');
  const userId = pathParts[2];  // e.g. /users/123/Home => '123'

  console.log("Parsed userId:", userId);

  fetch(`/api/users/${userId}`)
    .then(res => {
      console.log("API response status:", res.status);
      return res.json();
    })
    .then(user => {
      console.log("Fetched user:", user);

      if (user && user.name) {
        document.getElementById("userName").textContent = `Welcome, ${user.name}!`;
        document.getElementById("email").textContent = `Email: ${user.email}`;
        document.getElementById("role").textContent = `Role: ${user.role}`;
      } else {
        console.error("User data invalid or missing");
      }
    })
    .catch(err => console.error("Error fetching user data:", err));
});
