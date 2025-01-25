// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define a port for the server to listen on
const PORT = 3000;

// Create a simple route for the homepage
app.get('/', (req, res) => {
    res.send('Welcome to the OTA Platform Backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});