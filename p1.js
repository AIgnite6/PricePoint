// Get the modal and button elements
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

// Show modal when the page loads
window.onload = function() {
    modal.style.display = "flex"; // Display modal
}

// Close modal when the 'x' button is clicked
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal if the user clicks outside of the modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Handle form submission and display output
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Set output values
    document.getElementById('outputName').textContent = `${firstName} ${lastName}`;
    document.getElementById('outputEmail').textContent = email;
    document.getElementById('outputMessage').textContent = message;

    // Show the output container
    document.getElementById('output').style.display = 'block';
});
