function swapRows(row1Id, row2Id) {
    const row1 = document.getElementById(row1Id);
    const row2 = document.getElementById(row2Id);
    const tableBody = row1.parentNode;

    // Swap the rows by reordering them
    if (row1 && row2 && tableBody) {
        const nextSibling = row2.nextElementSibling === row1 ? row1 : row2.nextElementSibling;
        tableBody.insertBefore(row1, nextSibling);
    }
}

function openAgni3() {
    window.location.href = 'agni3.html';
}

function openAgni4() {
    window.location.href = 'agni4.html';
}

function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('date').textContent = `Date: ${date}`;
    document.getElementById('time').textContent = `Time: ${time}`;
}

setInterval(updateDateTime, 1000); // Update every second
updateDateTime(); // Initialize on load

// Function to generate a random value
function getRandomValue() {
    return (Math.random() * 100).toFixed(2); // Random value between 0 and 100
}

// Function to update the random value in the respective boxes
function updateRandomValues() {
    for (let i = 1; i <= 6; i++) {
        const randomValue = getRandomValue();
        document.getElementById(`random-value-${i}`).textContent = `${randomValue} units`;
    }
}



function setZero() {
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`random-value-${i}`).textContent = `0 units`;
    }
}

// Update the random value every 3 seconds
setInterval(updateRandomValues, 4000);

// Add event listener to the "Set Zero" button
document.getElementById('zero').addEventListener('click', setZero);
