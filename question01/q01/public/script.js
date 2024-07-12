document.getElementById('numberForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const numberType = document.getElementById('numberType').value;
    const output = document.getElementById('output');

    try {
        const response = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ numberType })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output.textContent = `Error fetching numbers: ${error.message}`;
    }
});
