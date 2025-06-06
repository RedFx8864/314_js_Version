document.addEventListener("DOMContentLoaded", () => {
  console.log("user.js loaded");

  const pathParts = window.location.pathname.split('/');
  const userId = pathParts[2];
  console.log("Parsed userId:", userId);

  fetch(`/api/users/${userId}`)
    .then(response => {
      console.log("API response status:", response.status);
      return response.json();
    })
    .then(user => {
      console.log("Fetched user:", user);

      if (user && user.name) {
        const userNameElement = document.getElementById("userName");
        if (userNameElement) {
          userNameElement.textContent = `Welcome, ${user.name}!`;
        } else {
          console.error("No element with ID 'userName' found.");
        }
      } else {
        console.error("User not found or missing name");
      }
    })
    .catch(err => {
      console.error("Failed to fetch user data:", err);
    });
});
