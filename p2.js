// Function to dynamically add a row to the specification table
function addRow() {
    const table = document.getElementById('specTable');
    const rowCount = table.rows.length + 1;
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td><input type="text" name="specification${rowCount}" placeholder="Enter specification"></td>
        <td><input type="text" name="value${rowCount}" placeholder="Enter value"></td>
    `;
}

// Handling form submission
document.getElementById('queryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get values
    const itemName = document.getElementById('itemName').value;
    const itemType = document.getElementById('itemType').value;

    // Get table data
    const specTable = document.getElementById('specTable');
    let tableData = '';

    // Loop through table rows
    for (let i = 0; i < specTable.rows.length; i++) {
        let row = specTable.rows[i];
        let specName = row.cells[1].querySelector('input').value; // Get input value from specification cell
        let specValue = row.cells[2].querySelector('input').value; // Get input value from value cell

        tableData += `${specName}: ${specValue}<br>`; // Format the data
    }

    // Display selected values and table data
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<strong>Item Name:</strong> ${itemName}<br><strong>Item Type:</strong> ${itemType}<br><strong>Specifications:</strong><br>${tableData}`;
});
