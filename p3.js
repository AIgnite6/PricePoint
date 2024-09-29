// Function to dynamically add a row to the description table
function addRow() {
    const table = document.getElementById('descTable');
    const rowCount = table.rows.length + 1;
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td><input type="text" name="specification${rowCount}" placeholder="Enter specification"></td>
    `;
}

// Handling form submission
document.getElementById('queryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get values
    const serviceType = document.getElementById('serviceType').value;
    const location = document.getElementById('location').value;

    // Get descriptions from the table
    const descTable = document.getElementById('descTable');
    const rows = descTable.getElementsByTagName('tr');
    let descriptions = [];

    for (let i = 0; i < rows.length; i++) {
        const input = rows[i].getElementsByTagName('input')[0];
        if (input) {
            descriptions.push(input.value); // Collect input values
        }
    }

    // Display selected values
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<strong>Service Type:</strong> ${serviceType}<br>
                           <strong>Location:</strong> ${location}<br>
                           <strong>Descriptions:</strong> ${descriptions.join(', ')}`; // Join descriptions for display
});
