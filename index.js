const express = require('express');
const app = express();
const path = require('path'); // Import the path module
const PORT = process.env.PORT || 3000;

// Middleware to serve static files (HTML, CSS, JS) from the public directory
app.use(express.static('public'));

// Define route to serve onboard.html when accessing the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'onboard.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});





