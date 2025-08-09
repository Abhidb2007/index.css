// Import Express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Hello from Node.js + Express!');
});

// Example API route
app.get('/api', (req, res) => {
    res.json({ message: 'This is an API endpoint', status: 'success' });
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
