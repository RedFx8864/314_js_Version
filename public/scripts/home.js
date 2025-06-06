document.addEventListener("DOMContentLoaded", () => {
  const userId = window.location.pathname.split('/')[2];
  document.getElementById('hostId').value = userId;

  document.getElementById('eventForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    alert(data.message);
    e.target.reset();
  });
});
