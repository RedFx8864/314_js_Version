document.getElementById('login').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('passsword').value;
  const role = document.getElementById('role').value;

  try {
    const response = await fetch(`/api/users/${role}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const result = await response.json();

    if (response.ok) {
      alert(`User created: ${JSON.stringify(result)}`);
    } else {
      alert(`Error: ${result.error}`);
    }
  } catch (err) {
    alert('Request failed: ' + err.message);
  }
});
