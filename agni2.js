function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('date').textContent = `Date: ${date}`;
    document.getElementById('time').textContent = `Time: ${time}`;
  }
setInterval(updateDateTime, 1000); // Update every second
updateDateTime(); // Initialize on load
